<script lang="ts">
	import { sampleDataSet } from './testData';
	import TimelineDistance from './TimelineDistance.svelte';
	import TimelineNode from './TimelineNode.svelte';

	export let data = sampleDataSet;
	export let containerWidth = 1;

	interface TimelineEvent {
		date: string;
		description: string;
	}

	const eventDates = data.map((e) => {
		return new Date(e.date).getTime();
	});

	const totalTimeDelta = eventDates.at(-1)! - eventDates[0];

	let total = 0;
	const timelineItems = data.map((e, i) => {
		if (i === data.length - 1) {
			return {
				...e,
				percentageAfter: null
			};
		}
		const currentDate = eventDates[i];
		const nextDate = eventDates[i + 1];
		const timeDifferencePercentage = (nextDate - currentDate) / totalTimeDelta;
		total += timeDifferencePercentage;
		return {
			...e,
			percentageAfter: timeDifferencePercentage
		};
	});
	console.log(total);
</script>

<div class="timeline-container" style:width={`${containerWidth * 100}%`}>
	{#each timelineItems as event}
		<TimelineNode />
		{#if event.percentageAfter}
			<TimelineDistance widthPercentage={event.percentageAfter} />
		{/if}
	{/each}
</div>

<style lang="postcss">
	.timeline-container {
		width: 80%;
		display: flex;
		flex-direction: row;
	}
</style>
