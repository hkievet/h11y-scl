<script lang="ts">
	import TextInput from './TextInput.svelte';

	// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Combobox_Role

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
	$: filtered = options.filter((o) => {
		return o.includes(value);
	});

	let isFocused = false;

	const handleFocus = () => {
		isFocused = true;
	};

	const handleBlur = () => {
		isFocused = false;
	};
</script>

<label for="jokes">Enter a person's name</label>
<div class="combo-wrap">
	<TextInput
		bind:value
		type="text"
		id="jokes"
		role="combobox"
		aria-controls="joketypes"
		aria-autocomplete="list"
		aria-expanded="false"
		data-active-option="item1"
		aria-activedescendant=""
		on:focus={handleFocus}
		on:blur={handleBlur}
	/>
	<span aria-hidden="true" data-trigger="multiselect" />
	{#if isFocused}
		<ul id="joketypes" role="listbox" aria-label="Jokes" class="relativef bg-white left-0 right-0">
			{#each filtered as o}
				<li class="active" role="option" id={o}>{o}</li>
			{/each}
		</ul>
	{/if}
</div>
