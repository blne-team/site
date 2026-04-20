import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRelativePath(url: URL, lang: string) {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  
  // Remove the locale if it exists at the start
  const currentLang = parts[1];
  const pathParts = (ui as any)[currentLang] ? parts.slice(2) : parts.slice(1);
  
  const base = pathParts.join('/');
  return getLocalizedPath(base, lang);
}

export function getLocalizedPath(path: string, lang: string) {
  const cleanPath = path.replace(/^\//, '');
  if (lang === defaultLang) {
    return '/' + cleanPath;
  }
  return '/' + lang + '/' + cleanPath;
}
