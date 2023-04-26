<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let value: string;

	interface $$Props extends HTMLInputAttributes {
		'data-active-option'?: string;
		value: string;
	}

	import { getEventsAction } from './utils.js';
	import { current_component } from 'svelte/internal';
	const events = getEventsAction(current_component);
</script>

<input class="h11y-input" {...$$restProps} bind:value use:events />

<style lang="postcss">
	.h11y-input {
		@apply border-h11ypeach border-2 p-2 focus:border-h11ybrown;
		width: 100%;
	}
	input:focus,
	textarea:focus {
		outline: none;
	}
</style>
