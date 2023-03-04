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
