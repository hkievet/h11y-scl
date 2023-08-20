<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { getEventsAction } from './utils.js';
	import { createEventDispatcher, current_component, getContext } from 'svelte/internal';
	import type { Writable } from 'svelte/store';

	export let value: string;
	export let label: string | undefined = undefined;
	export let name: string | undefined = undefined;

	let isDirty: boolean = false;
	let field: HTMLInputElement;

	interface $$Props extends HTMLInputAttributes {
		'data-active-option'?: string;
		value: string;
		name?: string;
		label?: string;
	}

	const formIsDirty = getContext<Writable<boolean>>('form');

	$: console.log($formIsDirty);

	const events = getEventsAction(current_component);

	const dispatch = createEventDispatcher();

	function onChange(e: KeyboardEvent) {
		dispatch('change', { value: (e.target as HTMLInputElement).value });
	}

	function onBlur(e: Event) {
		isDirty = true;
	}
</script>

{#if label}
	<label for={name}>{label}</label>
	{#if ($formIsDirty || isDirty) && !field.validity.valid}
		<span class="text-h11yred">({field.validationMessage})</span>
	{/if}
	{#if $formIsDirty}
		<p>diryt</p>
	{/if}
{/if}

<input
	class="h11y-input"
	class:isDirty={$formIsDirty || isDirty}
	{name}
	type="text"
	bind:value
	use:events
	on:keyup={onChange}
	on:blur={onBlur}
	{...$$restProps}
	bind:this={field}
/>

<style lang="postcss">
	.h11y-input {
		@apply border-h11ypeach border-2 p-2 focus:border-h11ybrown;
		width: 100%;

		&.isDirty {
			&:invalid {
				@apply border-h11yred  border-dashed;
			}
			&:valid {
				@apply border-h11ypaleyellow;
			}
		}
	}
	input:focus,
	textarea:focus {
		outline: none;
	}
</style>
