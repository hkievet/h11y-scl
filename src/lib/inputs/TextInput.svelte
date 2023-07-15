<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let value: string;
	export let label: string | undefined = undefined;
	export let name: string | undefined = undefined;

	interface $$Props extends HTMLInputAttributes {
		'data-active-option'?: string;
		value: string;
		name?: string;
		label?: string;
	}

	import { getEventsAction } from './utils.js';
	import { createEventDispatcher, current_component } from 'svelte/internal';
	const events = getEventsAction(current_component);

	const dispatch = createEventDispatcher();

	function onChange(e: KeyboardEvent) {
		dispatch('change', { value: (e.target as HTMLInputElement).value });
	}
</script>

{#if label}
	<label for={name}>{label}</label>
{/if}
<input class="h11y-input" {name} type="text" bind:value use:events on:keyup={onChange} />

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
