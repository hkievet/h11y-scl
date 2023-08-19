<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		variant?: 'large' | 'normal';
		class: string;
	}

	export let variant: 'large' | 'normal' = 'normal';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function onClick(event: MouseEvent) {
		dispatch('click', event);
	}

	const normalButtonClass =
		'bg-h11ywhite text-h11yblack p-2 m-3 self-center hover:bg-h11ybrown hover:text-h11ywhite hover:cursor-pointer border-transparent hover:border-h11yblack border-2';

	$: btnClass = twMerge('bg-black', variant === 'normal' && normalButtonClass, $$props.class);
</script>

<button {...$$restProps} class={btnClass} on:click={onClick}><slot /></button>

<style lang="postcss">
	/* .normal-btn {
		@apply bg-h11ywhite text-h11yblack p-2 m-3 self-center hover:bg-h11ybrown hover:text-h11ywhite hover:cursor-pointer;
		@apply border-transparent hover:border-h11yblack border-2;
	}
	.large-btn {
		@apply text-3xl bg-h11ywhite text-h11yblack p-5 m-5 self-center hover:bg-h11ybrown hover:text-h11ywhite hover:cursor-pointer;
		@apply border-transparent hover:border-h11yblack border-2;
	} */
</style>
