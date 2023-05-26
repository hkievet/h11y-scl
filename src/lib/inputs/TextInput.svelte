<script lang="ts">
	import type { ChangeEventHandler, HTMLInputAttributes } from 'svelte/elements';

	export let value: string;

	interface $$Props extends HTMLInputAttributes {
		'data-active-option'?: string;
		value: string;
	}

	import { getEventsAction } from './utils.js';
	import { createEventDispatcher, current_component } from 'svelte/internal';
	const events = getEventsAction(current_component);

	const dispatch = createEventDispatcher();

	function onChange(e: KeyboardEvent) {
		dispatch('change', { value: (e.target as HTMLInputElement).value });
	}
</script>

<input class="h11y-input" {...$$restProps} bind:value use:events on:keyup={onChange} />

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
