<!-- Meow.story.svelte -->
<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte/src/helpers';
	import TextInput from './TextInput.svelte';
	import { H11YButton, H11YCard, H11YTypography } from '$lib';
	import Form from './Form.svelte';
	export let Hst: Hst;

	const formValues = {
		username: '',
		password: ''
	};

	function submit(event: any) {
		console.log(formValues);
	}
</script>

<Hst.Story>
	<H11YCard>
		<h1 class="text-3xl mb-3">Login Form</h1>
		<Form on:submit={submit}>
			<TextInput label="Username" bind:value={formValues.username} required />
			<TextInput label="Password" bind:value={formValues.password} type="password" required />
			<H11YButton class="m-0 mt-3" type="submit" variant="dark">Sign In</H11YButton>
		</Form>
		<p class="mt-5">
			{JSON.stringify(formValues, null, 2)}
		</p>
	</H11YCard>
</Hst.Story>
