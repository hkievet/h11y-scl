<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import LikeButton from './LikeButton.svelte';
</script>

<Meta title="LikeButton" component={LikeButton} />

<Story name="LikeButton">
	<LikeButton totalLikes={223} />
</Story>
