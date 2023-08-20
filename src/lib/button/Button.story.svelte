<!-- Meow.story.svelte -->
<script lang="ts">
	import { H11YButton } from '$lib';
	import type { Hst } from '@histoire/plugin-svelte/src/helpers';
	export let Hst: Hst;
</script>

<Hst.Story>
	<H11YButton>Small Button</H11YButton>
	<H11YButton variant="large">Large Button</H11YButton>
</Hst.Story>
