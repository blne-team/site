// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },

  adapter: cloudflare()
});