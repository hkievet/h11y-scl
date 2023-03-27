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
		const firstDate = eventDates[0];
		const currentDate = eventDates[i];
		let percentageBefore = (currentDate - firstDate) / totalTimeDelta;
		if (i === data.length - 1) {
			return {
				...e,
				percentageAfter: null,
				percentageBefore
			};
		}
		const nextDate = eventDates[i + 1];
		const timeDifferencePercentage = (nextDate - currentDate) / totalTimeDelta;
		total += timeDifferencePercentage;
		return {
			...e,
			percentageAfter: timeDifferencePercentage,
			percentageBefore
		};
	});
	console.log(total);
</script>

<div class="timeline-container" style:width={`${containerWidth * 100}%`}>
	{#each timelineItems as event}
		<TimelineNode leftPercentage={event.percentageBefore} />
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
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		position: relative;
	}
</style>
