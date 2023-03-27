<script lang="ts">
	export let leftPercentage: number = 0;

	$: leftProp = `${leftPercentage * 100}%`;
</script>

<div style:left={leftProp} />

<style lang="postcss">
	div {
		position: absolute;
		width: 24px;
		height: 24px;
		background-color: red;
		border-radius: 12px;
	}
</style>
