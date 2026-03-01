# CLAUDE.md — Biofauces Web

Guía completa del proceso de creación, decisiones técnicas y arquitectura del sitio web de Biofauces.

---

## 1. Qué es este proyecto

Sitio web estático sobre plantas carnívoras para la marca **Biofauces**.
- **Bilingüe**: Español (idioma por defecto, ruta raíz `/`) e Inglés (ruta `/en/`)
- **Framework**: Astro 4.x (generación estática, 0 JavaScript en cliente salvo el chat widget)
- **Deploy dual**: GitHub Pages + Vercel

---

## 2. Stack tecnológico — por qué cada herramienta

| Herramienta | Decisión |
|---|---|
| **Astro 4.x** | Genera HTML estático puro, perfecto para un sitio de contenido. Soporte i18n nativo y rutas dinámicas. |
| **TypeScript** | Tipado para los datos de especies (`src/data/species.ts`), evita errores en producción. |
| **CSS puro** | Sin frameworks CSS (Tailwind, etc.). El diseño es muy específico (dark botanical museum), mejor con variables CSS propias. |
| **Vercel** | Deploy automático desde GitHub, Vercel Edge Functions para la API del chat. |
| **GitHub Pages** | Deploy alternativo gratuito, activado por GitHub Actions. |
| **GitHub Actions** | CI/CD automático: cada push a `main` construye y despliega en Pages. |

---

## 3. Estructura de archivos

```
/
├── api/
│   └── chat.ts              # Vercel Edge Function — asistente virtual Claude API
├── assets/
│   └── logo3 biofauces.jpg  # Logo original (Venus atrapamoscas)
├── public/
│   ├── favicon.svg
│   └── logo-biofauces.jpg
├── src/
│   ├── components/
│   │   ├── CareSection.astro    # Tarjeta de sección de cuidados
│   │   ├── ChatWidget.astro     # Popup asistente virtual
│   │   ├── Footer.astro
│   │   ├── GalleryGrid.astro    # Galería masonry
│   │   ├── Navigation.astro     # Nav bilingüe con selector de idioma
│   │   └── SpeciesCard.astro    # Tarjeta de especie en el catálogo
│   ├── data/
│   │   └── species.ts           # FUENTE DE VERDAD: datos de las 8 especies (ES + EN)
│   ├── i18n/
│   │   ├── ui.ts                # Todas las cadenas de texto ES/EN
│   │   └── utils.ts             # getLangFromUrl, useTranslations, getAlternateLangPath
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout base HTML (head, nav, footer, chat widget)
│   ├── pages/
│   │   ├── index.astro          # Home ES
│   │   ├── cuidados.astro       # Guía de cuidados ES
│   │   ├── galeria.astro        # Galería ES
│   │   ├── especies/
│   │   │   ├── index.astro      # Catálogo de especies ES
│   │   │   └── [especie].astro  # Ficha individual de especie ES
│   │   └── en/                  # Espejo completo en inglés
│   │       ├── index.astro
│   │       ├── care.astro
│   │       ├── gallery.astro
│   │       └── species/
│   │           ├── index.astro
│   │           └── [species].astro
│   └── styles/
│       └── global.css           # Variables CSS, tipografía, reset, clases globales
├── astro.config.mjs             # Config Astro + lógica de base URL dual
├── vercel.json                  # Config deploy Vercel
├── .github/workflows/deploy.yml # GitHub Actions CI/CD
└── package.json
```

---

## 4. Sistema de i18n (internacionalización)

### Decisión de arquitectura
Se optó por **i18n manual** con archivos propios en lugar del plugin oficial de Astro i18n, por mayor control sobre las rutas.

- **Español**: ruta raíz (`/`, `/cuidados/`, `/especies/`, etc.) — sin prefijo de idioma
- **Inglés**: prefijo `/en/` (`/en/`, `/en/care/`, `/en/species/`, etc.)

### Cómo funciona
1. `src/i18n/ui.ts` — objeto con todas las cadenas de texto para ES y EN
2. `src/i18n/utils.ts` — funciones helper:
   - `getLangFromUrl(url)` — detecta el idioma desde la URL
   - `useTranslations(lang)` — devuelve función `t('clave')` para el idioma dado
   - `getAlternateLangPath(url, lang)` — genera la URL equivalente en el otro idioma (para el selector de idioma)
3. Cada página `.astro` llama a `useTranslations` con su idioma fijo

### Datos de especies bilingüe
El archivo `src/data/species.ts` contiene todos los textos en ambos idiomas (`nameEs`/`nameEn`, `careEs`/`careEn`, `dormancyEs`/`dormancyEn`, etc.) para las 8 especies.

---

## 5. Sistema de diseño — "Dark Botanical Museum"

### Paleta de colores (CSS variables en `src/styles/global.css`)
```css
--bg-primary:   #080C04   /* verde-negro muy oscuro, fondo principal */
--bg-secondary: #0D1207   /* fondo de tarjetas */
--green-dark:   #1E2A0A
--green-mid:    #4A5C1A   /* verde oliva del logo */
--green-light:  #7A9A3A
--crimson:      #8B2212   /* rojo espinas del logo */
--crimson-mid:  #A83828
--cream:        #F0EDE4   /* texto principal */
--cream-dim:    #C8C4B8   /* texto secundario */
```

### Tipografía
- **Cormorant Garamond** (Google Fonts) — títulos, nombres científicos en cursiva
- **EB Garamond** (Google Fonts) — cuerpo de texto

### Principios de diseño
- Fondo muy oscuro (#080C04) que evoca el interior de un terrario o museo nocturno
- Acentos crimson (rojo) del logo de Biofauces (ilustración de Venus atrapamoscas)
- Verde oliva del logo como color de acento secundario
- Animaciones sutiles: cilios ondulantes en hero, fade-in de secciones al scroll (IntersectionObserver)
- Tipografía serif de museo para dar autoridad científica

---

## 6. Especies documentadas (8 total)

| Slug ES | Slug EN | Tipo de trampa |
|---|---|---|
| `dionaea-muscipula` | `venus-flytrap` | Trampa activa de cierre |
| `nepenthes` | `nepenthes` | Jarra pasiva (ascidio) |
| `sarracenia` | `sarracenia` | Jarra pasiva |
| `drosera` | `sundew` | Adhesiva activa |
| `pinguicula` | `butterwort` | Adhesiva pasiva |
| `heliamphora` | `heliamphora` | Jarra pasiva (tepui) |
| `cephalotus-follicularis` | `cephalotus` | Jarra pasiva |
| `brocchinia-reducta` | `brocchinia` | Jarra pasiva |

### Imágenes
Todas las imágenes provienen de **iNaturalist Open Data** (S3 público, licencia CC):
- URL base: `https://inaturalist-open-data.s3.amazonaws.com/photos/{id}/large.jpg`
- Se verificaron observaciones con `quality_grade=research` en ubicaciones conocidas de cada especie
- Para Heliamphora: observaciones en tepuis de Venezuela (Canaima NP, Roraima)

---

## 7. Característica especial: Grupos de cuidado de Nepenthes

Las Nepenthes tropicales se dividen en tres grupos según altitud y temperatura. Se creó una interfaz `CareGroup` en `species.ts` y se renderizan como tarjetas visuales en la ficha de especie.

```typescript
interface CareGroup {
  name: string;        // 'Lowland' | 'Intermediate' | 'Highland'
  altitude: string;
  tempDay: string;
  tempNight: string;
  humidity: string;
  examplesEs: string;
  examplesEn: string;
  noteEs: string;
  noteEn: string;
  color: 'lowland' | 'intermediate' | 'highland';  // para CSS
}
```

Colores de borde de cada grupo:
- Lowland → naranja `#D97A3A`
- Intermediate → verde `#7A9A2A`
- Highland → azul `#5AABCC`

---

## 8. Asistente virtual (ChatWidget + API)

### Arquitectura
- **`src/components/ChatWidget.astro`** — UI del popup (botón flotante + panel de chat)
- **`api/chat.ts`** — Vercel Edge Function que conecta con la API de Claude

### Decisiones
- Solo se muestra en **Vercel** (no en GitHub Pages): la variable `GITHUB_ACTIONS=true` en build time excluye el componente en el workflow
- Modelo: **claude-haiku-4-5-20251001** (rápido y económico para respuestas de soporte)
- Sistema de prompts en español e inglés, limitado a plantas carnívoras
- Historial de conversación: máximo 10 mensajes para controlar el coste de tokens
- Máximo 600 tokens por respuesta (3-4 frases concisas)

### Variable de entorno necesaria en Vercel
```
ANTHROPIC_API_KEY=sk-ant-...
```

### Endpoint
```
POST /api/chat
Body: { message: string, history: Array<{role, content}> }
Response: { reply: string }
```

---

## 9. Deploy dual: GitHub Pages + Vercel

### Problema resuelto
GitHub Pages sirve desde una subruta (`/biofauces/`) mientras que Vercel sirve desde raíz (`/`). Astro necesita saber el `base` para construir las URLs de assets y links.

### Solución en `astro.config.mjs`
```javascript
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubActions
    ? 'https://serod1972.github.io'   // GitHub Pages
    : 'https://biofauces.vercel.app', // Vercel
  base: isGitHubActions ? '/biofauces' : '/',
});
```

La variable `GITHUB_ACTIONS=true` se inyecta automáticamente en el workflow.

### GitHub Actions (`.github/workflows/deploy.yml`)
- Trigger: push a `main`
- Node 20 + `npm ci` + `npm run build`
- Deploy con `actions/deploy-pages@v4`
- Rama de deploy: `gh-pages` (generada automáticamente)

### Activar GitHub Pages (manual, una vez)
1. Settings del repo → Pages
2. Source: **GitHub Actions**
3. El workflow se encarga del resto

---

## 10. Configuración de git

El repo usa un **fine-grained PAT** de GitHub. Al hacer push por primera vez fue necesario desactivar el helper de credenciales de macOS (osxkeychain) para el repo local:

```bash
git config credential.helper ""
```

Esto permite que el token en la URL del remote tenga prioridad sobre el keychain del sistema.

---

## 11. Decisiones de vocabulario (ES)

- **Hibernación** (no "dormancia") — término preferido para el período de reposo invernal de las especies templadas

---

## 12. Comandos útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Subir cambios a GitHub (activa deploy automático)
git add -A
git commit -m "descripción del cambio"
git push
```
