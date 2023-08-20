<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends HTMLAttributes<HTMLDivElement> {}

	const divClass = twMerge($$props.class, 'bg-h11ywhite p-5 rounded-md drop-shadow-md');
</script>

<div {...$$restProps} class={divClass}><slot /></div>
