<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Story name="Button No Args">
	<Button>Small Button</Button>
</Story>

<Story name="Large Button">
	<Button variant="large">Large Button</Button>
</Story>
