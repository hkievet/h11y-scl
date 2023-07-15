<script lang="ts">
	import { bodyFont, emphasizedBodyFont } from './data';

	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' | 'label' = 'span';

	export let fontPresets: 'bodyFont' | 'emphasizedBodyFont' = 'bodyFont';

	export let fontParams: Partial<RobotoFlexParams> = {};

	if (fontPresets === 'emphasizedBodyFont') {
		fontParams = { ...emphasizedBodyFont, ...fontParams };
	} else {
		fontParams = bodyFont;
	}

	interface RobotoFlexParams {
		GRAD: number;
		XOPQ: number;
		XTRA: number;
		YOPQ: number;
		YTAS: number;
		YTDE: number;
		YTFI: number;
		YTLC: number;
		YTUC: number;
		opsz: number;
		slnt: number;
		wdth: number;
		wght: number;
	}
</script>

<svelte:element
	this={tag}
	class="roboto-flex"
	style:--GRAD={fontParams.GRAD}
	style:--XOPQ={fontParams.XOPQ}
	style:--XTRA={fontParams.XTRA}
	style:--YOPQ={fontParams.YOPQ}
	style:--YTAS={fontParams.YTAS}
	style:--YTDE={fontParams.YTDE}
	style:--YTFI={fontParams.YTFI}
	style:--YTLC={fontParams.YTLC}
	style:--YTUC={fontParams.YTUC}
	style:--opsz={fontParams.opsz}
	style:--slnt={fontParams.slnt}
	style:--wdth={fontParams.wdth}
	style:--wght={fontParams.wght}><slot /></svelte:element
>

<style lang="postcss">
	.roboto-flex {
		font-family: 'RobotoFlex';
		font-size: 24px;
		font-variation-settings: 'GRAD' var(--GRAD), 'XOPQ' var(--XOPQ), 'XTRA' var(--XTRA),
			'YOPQ' var(--YOPQ), 'YTAS' var(--YTAS), 'YTDE' var(--YTDE), 'YTFI' var(--YTFI),
			'YTLC' var(--YTLC), 'YTUC' var(--YTUC), 'opsz' var(--opsz), 'slnt' var(--slnt),
			'wdth' var(--wdth), 'wght' var(--wght);
	}
</style>
