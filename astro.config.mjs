// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
