import { ui, defaultLang, type Lang, type TranslationKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const pathname = url.pathname;
  // Remove base path if present
  const clean = pathname.replace(/^\/biofauces/, '');
  const [, first] = clean.split('/');
  if (first === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    const langDict = ui[lang] as Record<string, string>;
    const defaultDict = ui[defaultLang] as Record<string, string>;
    return langDict[key] ?? defaultDict[key] ?? key;
  };
}

export function getAlternateLangPath(url: URL, targetLang: Lang): string {
  const pathname = url.pathname;
  const base = pathname.startsWith('/biofauces') ? '/biofauces' : '';
  const clean = pathname.replace(/^\/biofauces/, '').replace(/\/$/, '') || '/';

  // Page name mapping ES → EN
  const esSegToEn: Record<string, string> = {
    'especies': 'species',
    'cuidados': 'care',
    'galeria': 'gallery',
    'curiosidades': 'curiosities',
  };
  // Page name mapping EN → ES
  const enSegToEs: Record<string, string> = {
    'species': 'especies',
    'care': 'cuidados',
    'gallery': 'galeria',
    'curiosities': 'curiosidades',
  };

  if (targetLang === 'en') {
    if (clean === '/') return base + '/en/';
    // /especies/[slug] → /en/species/[en-slug]
    const especieMatch = clean.match(/^\/especies\/(.+)$/);
    if (especieMatch) {
      const enSlug = slugMap[especieMatch[1]] || especieMatch[1];
      return base + `/en/species/${enSlug}/`;
    }
    // /especies → /en/species, /cuidados → /en/care, /galeria → /en/gallery
    const seg = clean.split('/')[1];
    const mapped = esSegToEn[seg];
    if (mapped) return base + `/en/${mapped}/`;
    return base + '/en' + clean + '/';
  } else {
    if (clean === '/en' || clean === '') return base + '/';
    // /en/species/[slug] → /especies/[es-slug]
    const speciesMatch = clean.match(/^\/en\/species\/(.+)$/);
    if (speciesMatch) {
      const esSlug = slugMapReverse[speciesMatch[1]] || speciesMatch[1];
      return base + `/especies/${esSlug}/`;
    }
    // /en/species → /especies, /en/care → /cuidados, /en/gallery → /galeria
    const seg = clean.split('/')[2];
    const mapped = enSegToEs[seg];
    if (mapped) return base + `/${mapped}/`;
    return base + clean.replace(/^\/en/, '') + '/' || base + '/';
  }
}

// Map ES slugs to EN slugs and vice versa
export const slugMap: Record<string, string> = {
  'dionaea-muscipula': 'venus-flytrap',
  'nepenthes': 'nepenthes',
  'sarracenia': 'sarracenia',
  'drosera': 'sundew',
  'pinguicula': 'butterwort',
  'heliamphora': 'heliamphora',
  'cephalotus-follicularis': 'cephalotus',
  'brocchinia-reducta': 'brocchinia',
};

export const slugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([k, v]) => [v, k])
);
