import { defineConfig } from 'astro/config';

const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');

// https://astro.build/config
export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/',
  output: 'static',
});
