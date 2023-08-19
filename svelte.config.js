import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({ postcss: true, base: '/h11y-scl' }),

	kit: {
		adapter: adapter(),
		paths: {
			base: '/h11y-scl/'
		}
	},
};

export default config;
