<!-- Meow.story.svelte -->
<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte/src/helpers';
	import TextInput from './TextInput.svelte';
	import { H11YButton } from '$lib';
	export let Hst: Hst;

	const formValues = {
		username: '',
		password: ''
	};

	function submit(event: SubmitEvent) {
		event.preventDefault();
		// $formIsDirty = true;
		console.log(formValues);
	}
</script>

<Hst.Story>
	<form class="bg-white p-2" on:submit={submit}>
		<TextInput label="Username" bind:value={formValues.username} required />
		<TextInput label="Password" bind:value={formValues.password} type="password" required />
		<H11YButton class="m-0 mt-3">Sign In</H11YButton>

		<p>
			{JSON.stringify(formValues, null, 2)}
		</p>
	</form>
</Hst.Story>
