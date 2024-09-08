// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),

  experimental: {
    env: {
      schema: {
        WEBHOOK_URL: envField.string({ access: 'secret', context: 'server' }),
        REDIS_URL: envField.string({ access: 'secret', context: 'server' }),
      },
    },
  },
});
