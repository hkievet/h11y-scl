<script lang="ts">
	import BasicTimelineItemRepr from '$lib/timeline/BasicTimelineItemRepr.svelte';
	import { sampleDataSet } from '$lib/timeline/testData';
	import Timeline from '$lib/timeline/Timeline.svelte';
	import TimelineGrouping from '$lib/timeline/TimelineGrouping.svelte';
	import TimelineNode from '$lib/timeline/TimelineNode.svelte';

	let selectedTimelineItem: any = null;

	function onSelect(e: any) {
		selectedTimelineItem = e.detail.item;
	}
</script>

<TimelineGrouping eventGroups={[sampleDataSet]} on:select={onSelect} />
{#if selectedTimelineItem}
	<BasicTimelineItemRepr timelineItemData={selectedTimelineItem} />
{/if}
