import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: 'server',
  adapter: vercel(),
});