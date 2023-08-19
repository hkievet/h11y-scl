import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	setupFile: './src/histoire-setup.ts',
	plugins: [HstSvelte()],
	routerMode: 'hash',
	vite: {
		base: process.env.HISTOIRE_BASE || '/'
	}
});
