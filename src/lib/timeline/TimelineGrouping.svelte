<script>
	import { each } from 'svelte/internal';
	import { anotherDataSet, sampleDataSet } from './testData';
	import Timeline from './Timeline.svelte';
	import TimelineGap from './TimelineGap.svelte';

	const eventGroups = [sampleDataSet, anotherDataSet];

	const allEvents = eventGroups.flat();
	const totalEvents = allEvents.length;

	const totalGaps = eventGroups.length - 1;

	const gapPercentage = 1 / totalEvents;

	const totalGapPercentage = gapPercentage * totalGaps;
	const totalWidthAfterGap = 1 - totalGapPercentage;

	const groupWidths = eventGroups.map((events) => {
		return (events.length / totalEvents) * totalWidthAfterGap;
	});
</script>

<div class="timeline-container">
	{#each eventGroups as events, i}
		<Timeline data={events} containerWidth={groupWidths[i]} />
		{#if i < eventGroups.length - 1}
			<TimelineGap containerWidth={gapPercentage} />
		{/if}
	{/each}
</div>

<style lang="postcss">
	.timeline-container {
		padding: 5px;
		margin: 0 auto;
		width: 80%;
		display: flex;
		flex-direction: row;
	}
</style>
