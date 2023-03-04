<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Meta title="Button" component={Button} />

<Story name="Button No Args">
	<Button>Small Button</Button>
</Story>

<Story name="Large Button">
	<Button type="large">Large Button</Button>
</Story>
