<script lang="ts">
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' = 'h1';
</script>

<svelte:element this={tag} class="roboto-flex"><slot /></svelte:element>

<style lang="postcss">
	.roboto-flex {
		font-family: 'RobotoFlex';
	}
</style>
