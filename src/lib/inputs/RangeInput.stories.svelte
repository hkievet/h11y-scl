<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import RangeInput from './RangeInput.svelte';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Meta title="RangeInput" component={RangeInput} />

<Story name="RangeInput No Args">
	<RangeInput />
</Story>
