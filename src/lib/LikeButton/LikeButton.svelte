<script lang="ts">
	export let totalLikes: number = 0;
	export let personalLikeCount: number = 0;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function onClick(event: MouseEvent) {
		if (personalLikeCount < 10) {
			dispatch('click', event);
			personalLikeCount++;
		}
	}
</script>

<button
	class="flex flex-row items-center hover:cursor-pointer like-button"
	on:click={onClick}
	data-likes={personalLikeCount}
	style="--opac: {(personalLikeCount + 1) / 11}"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="517"
		height="519"
		viewBox="0 0 517 519.134"
		class="like-button-svg"
	>
		<path
			d="M1058.745,337.977c-98.906-319.9-507.927-16.263.539,365.283,510.1-384.194,98.517-684.955-.171-365.283"
			transform="translate(-801.008 -194.76)"
			stroke="#000"
			stroke-linecap="round"
			stroke-miterlimit="10"
			stroke-width="17"
			class="red-fill"
		/>
	</svg>
	<p class="ml-2">{personalLikeCount + totalLikes} Likes</p>
</button>

<style lang="postcss">
	@keyframes tilt {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(20deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-20deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.like-button-svg {
		height: 36px;
		width: 36px;
		fill-opacity: var(--opac);
		@apply fill-h11yred;
	}
	.like-button {
		&:hover {
			.like-button-svg {
				animation: tilt 1s ease-in-out forwards infinite;
			}
		}
	}
</style>
