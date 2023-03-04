<script lang="ts">
	export let type: 'large' | 'normal' = 'normal';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function onClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

{#if type === 'large'}
	<button class="large-btn" on:click={onClick}><slot /></button>
{:else}
	<button class="normal-btn" on:click={onClick}><slot /></button>
{/if}

<style lang="postcss">
	.normal-btn {
		@apply bg-h11ywhite text-h11yblack p-2 m-3 self-center hover:bg-h11ybrown hover:text-h11ywhite hover:cursor-pointer;
		@apply border-transparent hover:border-h11yblack border-2;
	}
	.large-btn {
		@apply text-3xl bg-h11ywhite text-h11yblack p-5 m-5 self-center hover:bg-h11ybrown hover:text-h11ywhite hover:cursor-pointer;
		@apply border-transparent hover:border-h11yblack border-2;
	}
</style>
