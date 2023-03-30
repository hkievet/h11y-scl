<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import BasicTimelineItemRepr from '$lib/timeline/BasicTimelineItemRepr.svelte';
	import { anotherDataSet, sampleDataSet } from '$lib/timeline/testData';
	import TimelineGrouping from '$lib/timeline/TimelineGrouping.svelte';

	let selectedTimelineItem = null;

	function onSelect(e) {
		selectedTimelineItem = e.detail.item;
	}
</script>

<Meta title="Timeline" component={TimelineGrouping} />

<Story name="Single Timeline Timeline">
	<TimelineGrouping eventGroups={[sampleDataSet]} on:select={onSelect} />
	{#if selectedTimelineItem}
		<BasicTimelineItemRepr timelineItemData={selectedTimelineItem} />
	{/if}
</Story>

<Story name="Combined Timeline">
	<TimelineGrouping eventGroups={[anotherDataSet, sampleDataSet]} on:select={onSelect} />
	{#if selectedTimelineItem}
		<BasicTimelineItemRepr timelineItemData={selectedTimelineItem} />
	{/if}
</Story>
