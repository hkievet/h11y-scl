<script lang="ts">
	import { anotherDataSet, sampleDataSet } from './testData';
	import Timeline from './Timeline.svelte';
	import TimelineGap from './TimelineGap.svelte';
	import { createEventDispatcher } from 'svelte';

	export let eventGroups: { date: string; title: string; description: string }[][];
	export let trackActiveItem = true;
	export let activeItem: { groupIndex: number; index: number } | null = null;
	const dispatch = createEventDispatcher();

	eventGroups.forEach((events) => {
		events.sort((a, b) => {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		});
	});

	// sanity check that there is no overlap in date ranges.
	function checkOverlap(arr: Partial<{ startTime: number; endTime: number }>[]) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = i + 1; j < arr.length; j++) {
				try {
					if (arr[i].startTime! < arr[j].endTime! && arr[j].startTime! < arr[i].endTime!) {
						return true;
					}
				} catch (e) {
					return true;
				}
			}
		}
		return false; // there is no overlap
	}
	const startEndGrouping = eventGroups.map((events) => {
		return {
			startTime: new Date(events[0].date).getTime(),
			endtime: new Date(events.at(-1)!.date).getTime()
		};
	});

	if (checkOverlap(startEndGrouping)) {
		console.error('There is an issue with the data');
	}

	const allEvents = eventGroups.flat();
	const totalEvents = allEvents.length;

	const totalGaps = eventGroups.length - 1;

	const gapPercentage = 1 / totalEvents;

	const totalGapPercentage = gapPercentage * totalGaps;
	const totalWidthAfterGap = 1 - totalGapPercentage;

	const groupWidths = eventGroups.map((events) => {
		return (events.length / totalEvents) * totalWidthAfterGap;
	});

	function onSelect(e: Partial<{ detail: number }>, i: any) {
		const selectedGroup = eventGroups[i];
		if (e.detail !== undefined && e.detail <= selectedGroup.length) {
			const selectedItem = selectedGroup[e.detail];
			if (selectedItem) {
				dispatch('select', { item: selectedItem });
				activeItem = { groupIndex: i, index: e.detail };
			}
		}
	}
</script>

<div class="timeline-container">
	{#each eventGroups as events, i}
		<Timeline
			activeItem={activeItem && activeItem.groupIndex === i ? activeItem.index : null}
			data={events}
			containerWidth={groupWidths[i]}
			on:select={(e) => {
				onSelect(e, i);
			}}
		/>
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
