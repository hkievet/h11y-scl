<script lang="ts">
	export let containerWidth: number;
	$: width = `${containerWidth * 100}%`;
</script>

<div style:width />

<style lang="postcss">
	div {
		height: 2px;
		margin-top: 11px;
		width: 33%;
		border-color: black;
		border-style: dashed;
		border-top: 2px;
		border-bottom: none;
		border-left: none;
		border-right: none;
	}
</style>
