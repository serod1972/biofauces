import { defineConfig } from 'astro/config';

// Use /biofauces base for GitHub Pages, root for Vercel
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubActions
    ? 'https://serod1972.github.io'
    : 'https://biofauces.vercel.app',
  base: isGitHubActions ? '/biofauces' : '/',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    assets: '_assets',
  },
});
