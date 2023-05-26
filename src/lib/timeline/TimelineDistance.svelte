<script lang="ts">
	export let widthPercentage: number = 0;
</script>

<div style:width={`${widthPercentage * 100}%`} />

<style lang="postcss">
	div {
		margin-top: 11px;
		height: 2px;
		background-color: blue;
	}
</style>
