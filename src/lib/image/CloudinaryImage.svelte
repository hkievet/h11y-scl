<script lang="ts">
	import { Cloudinary } from '@cloudinary/url-gen';
	import { Resize } from '@cloudinary/url-gen/actions/resize';
	import { Effect } from '@cloudinary/url-gen/actions/effect';
	import Image from './Image.svelte';

	export let cloudName: string;
	export let alt: string;
	export let imageName: string;

	const cld = new Cloudinary({
		cloud: {
			cloudName
		}
	});

	const myImage = cld.image(imageName);
	myImage.resize(Resize.scale().width('800'));
	const srcURL = myImage.toURL();
	myImage.effect(Effect.vectorize());
	const loadingURL = myImage.toURL();
</script>

<Image lowResUrl={loadingURL} highResUrl={srcURL} {alt} />
