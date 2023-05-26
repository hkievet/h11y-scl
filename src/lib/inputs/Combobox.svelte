<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TextInput from './TextInput.svelte';

	export let options: string[];
	export let value: string;

	const dispatch = createEventDispatcher();
	// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Combobox_Role
	// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected

	$: filtered = options
		.filter((o) => {
			return o.includes(value);
		})
		.map((o) => {
			return { value: o, isSelected: o === value };
		});

	let isFocused = false;

	const handleFocus = () => {
		isFocused = true;
	};

	const handleBlur = (e) => {
		console.log(e);
		isFocused = false;
	};

	function optionClick(o: string) {
		isFocused = true;
		console.log('bam');
		dispatch('eventSelection', o);
		value = o;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			isFocused = false;
		} else {
			isFocused = true;
		}
	}

	function onChange({ details }: any) {
		dispatch('change', details);
	}
</script>

<label for="jokes">Enter a person's name</label>
<div class="combo-wrap" on:keydown={handleKeyDown}>
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
		on:change={onChange}
	/>
	<span aria-hidden="true" data-trigger="multiselect" />
	{#if isFocused}
		<ul id="joketypes" role="listbox" aria-label="Jokes" class="relativef bg-white left-0 right-0">
			{#each filtered as o}
				<li
					class="active border-transparent hover:border-h11ylightblue border-2 hover:cursor-pointer"
					role="option"
					aria-selected={o.isSelected}
					id={o.value}
					on:mousedown={() => optionClick(o.value)}
				>
					{o.value}
				</li>
			{/each}
		</ul>
	{/if}
</div>
