<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function onChange(event: Event) {
		dispatch('change', event);
	}

	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
	export let min: number = 0;
	export let max: number = 100;
	export let step: number = 1;
	export let name: string = 'unnamed slider';
	export let label: string = name;
	export let value: number;
	$: if (!value) value = 0;
</script>

<div>
	<input type="range" {min} {max} {step} {name} id={name} on:change={onChange} bind:value />
	<label for={name}>{label}</label>
</div>
