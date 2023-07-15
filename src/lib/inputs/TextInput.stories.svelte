<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import TextInput from './TextInput.svelte';
</script>

<Meta title="TextInput" component={TextInput} />

<Story name="TextInput No Args">
	<TextInput value="" />
</Story>

<Story name="TextInput with label">
	<TextInput value="" name="boombap" label="Boom Bap" />
</Story>
