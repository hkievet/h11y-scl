<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Image from './Image.svelte';
	import CloudinaryImage from './CloudinaryImage.svelte';

	const cloudinaryCloudName = 'dd1sqkcyf';
	const cloudinaryImageName = 'water_gqyt9r';
	const imageAlt = 'Picture of water';
</script>

<Meta title="Image" component={Image} />

<Story name="Image">
	<CloudinaryImage cloudName={cloudinaryCloudName} imageName={cloudinaryImageName} alt={imageAlt} />
</Story>
