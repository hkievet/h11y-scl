<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import type { HTMLAttributes, HTMLFormAttributes } from 'svelte/elements';
	import { writable } from 'svelte/store';

	interface $$Props extends HTMLFormAttributes {}

	const formIsDirty = writable(false);
	setContext('form', formIsDirty);

	const dispatch = createEventDispatcher();

	function onSubmit(event: SubmitEvent) {
		console.log('submitted');
		event.preventDefault();
		dispatch('submit', event);
	}
</script>

<form {...$$restProps} on:submit={onSubmit}>
	<slot />
</form>
