<script lang="ts">
	import { writable } from 'svelte/store';
	export let lowResUrl: string;
	export let highResUrl: string;
	export let alt: string;

	const srcUrl = writable(lowResUrl);

	function onLoad() {
		if (highResUrl !== $srcUrl) {
			srcUrl.set(highResUrl);
		}
	}
</script>

<img src={$srcUrl} {alt} loading="lazy" on:load={onLoad} class:blurred={$srcUrl !== highResUrl} />

<style lang="postcss">
	img {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		filter: none;
		transition: filter 0.8s ease-out;
	}
	.blurred {
		filter: blur(10px);
		transition: none;
	}
</style>
