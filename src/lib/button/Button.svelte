<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';

	interface $$Props extends HTMLButtonAttributes {
		variant?: 'large' | 'normal' | 'dark';
		class?: string;
	}

	export let variant: 'large' | 'normal' | 'dark' = 'normal';

	const dispatch = createEventDispatcher();
	function onClick(event: MouseEvent) {
		dispatch('click', event);
	}

	const normalDark =
		'text-h11ywhite bg-h11yblack p-2 m-3 self-center hover:bg-h11ybrown hover:text-h11ywhite hover:cursor-pointer border-transparent hover:border-h11yblack border-2';

	const normalButtonClass =
		'bg-h11ywhite text-h11yblack p-2 m-3 self-center hover:bg-h11ybrown hover:text-h11ywhite hover:cursor-pointer border-transparent hover:border-h11yblack border-2';

	const largeButtonClass =
		'text-3xl bg-h11ywhite text-h11yblack p-5 m-5 self-center hover:bg-h11ybrown hover:text-h11ywhite hover:cursor-pointer';

	const border = 'border-transparent hover:border-h11yblack border-2';

	$: btnClass = twMerge(
		'bg-black',
		variant === 'normal' && normalButtonClass,
		variant === 'large' && largeButtonClass,
		variant === 'dark' && normalDark,
		border,
		$$props.class
	);
</script>

<button {...$$restProps} class={btnClass} on:click={onClick}><slot /></button>

<style lang="postcss">
</style>
