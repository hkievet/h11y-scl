<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let leftPercentage: number = 0;
	export let selected: boolean = false;

	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('click');
	}

	$: leftProp = `${leftPercentage * 100}%`;
</script>

<button style:left={leftProp} on:click={handleClick} class:selected />

<style lang="postcss">
	button {
		position: absolute;
		width: 24px;
		height: 24px;
		background-color: red;
		border-radius: 12px;
	}
	button:hover {
		background-color: orange;
	}

	button.selected {
		background-color: green;
	}
</style>
