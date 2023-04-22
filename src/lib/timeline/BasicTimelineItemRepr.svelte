<script lang="ts">
	import Typography from '$lib/typography/Typography.svelte';

	export let timelineItemData: Partial<{ date: string; description: string; title: string }>;
</script>

<Typography>{timelineItemData.title}</Typography>
<Typography>{timelineItemData.date}</Typography>
<Typography>{timelineItemData.description}</Typography>
