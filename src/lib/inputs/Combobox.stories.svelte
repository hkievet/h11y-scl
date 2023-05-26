<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Combobox from './Combobox.svelte';

	const options = [
		'Sofia',
		'Alejandro',
		'Lucia',
		'Diego',
		'Maria',
		'Carlos',
		'Isabella',
		'Javier',
		'Camila',
		'Juan'
	];

	let value = '';

	function onEventSelection(o) {
		console.log('boom');
		console.log(value);
		console.log(o);
	}
</script>

<Meta title="Combobox" component={Combobox} />

<Story name="Combobox No Args">
	<Combobox on:eventSelection={onEventSelection} {options} {value} />
	<p>Something something</p>
</Story>
