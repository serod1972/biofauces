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
  const clean = pathname.replace(/^\/biofauces/, '');

  if (targetLang === 'es') {
    // Remove /en prefix
    return base + clean.replace(/^\/en/, '') || base + '/';
  } else {
    // Add /en prefix
    if (clean.startsWith('/en')) return pathname;
    return base + '/en' + (clean === '/' ? '' : clean);
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
