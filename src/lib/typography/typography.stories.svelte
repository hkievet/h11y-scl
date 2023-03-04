<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Typography from './Typography.svelte';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Meta title="Typography" component={Typography} />

<Story name="Button No Args">
	<Typography>Boom</Typography>
</Story>

<Story name="tag props">
	<Typography tag="h1">h1 tag</Typography>
	<Typography tag="h2">h2 tag</Typography>
	<Typography tag="h3">h3 tag</Typography>
	<Typography tag="h4">h4 tag</Typography>
	<Typography tag="h5">h5 tag</Typography>
	<Typography tag="p">p tag</Typography>
	<Typography tag="span">span tag</Typography>
</Story>
