<script>
	import { H11YButton, H11YRangeInput } from '$lib';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { RoboFlexValues } from './data';

	import Typography from './Typography.svelte';

	let count = 0;
	function handleClick() {
		const str = `font-variation-settings: 'GRAD' ${GRAD}, 'XOPQ' ${XOPQ}, 'XTRA' ${XTRA},
			'YOPQ' ${YOPQ}, 'YTAS' ${YTAS}, 'YTDE' ${YTDE}, 'YTFI' ${YTFI},
			'YTLC' ${YTLC}, 'YTUC' ${YTUC}, 'opsz' ${opsz}, 'slnt' ${slnt},
			'wdth' ${wdth}, 'wght' ${wght};`;
		console.log(str);
	}

	let GRAD = RoboFlexValues.GRAD.default;
	let XOPQ = RoboFlexValues.XOPQ.default;
	let XTRA = RoboFlexValues.XTRA.default;
	let YOPQ = RoboFlexValues.YOPQ.default;
	let YTAS = RoboFlexValues.YTAS.default;
	let YTDE = RoboFlexValues.YTDE.default;
	let YTFI = RoboFlexValues.YTFI.default;
	let YTLC = RoboFlexValues.YTLC.default;
	let YTUC = RoboFlexValues.YTUC.default;
	let opsz = RoboFlexValues.opsz.default;
	let slnt = RoboFlexValues.slnt.default;
	let wdth = RoboFlexValues.wdth.default;
	let wght = RoboFlexValues.wght.default;

	$: GRADName = 'GRAD: ' + GRAD;
	$: XOPQName = 'XOPQ: ' + XOPQ;
	$: XTRAName = 'XTRA: ' + XTRA;
	$: YOPQName = 'YOPQ: ' + YOPQ;
	$: YTASName = 'YTAS: ' + YTAS;
	$: YTDEName = 'YTDE: ' + YTDE;
	$: YTFIName = 'YTFI: ' + YTFI;
	$: YTLCName = 'YTLC: ' + YTLC;
	$: YTUCName = 'YTUC: ' + YTUC;
	$: opszName = 'opsz: ' + opsz;
	$: slntName = 'slnt: ' + slnt;
	$: wdthName = 'wdth: ' + wdth;
	$: wghtName = 'wght: ' + wght;
</script>

<Meta title="Typography" component={Typography} />

<Story name="Button No Args">
	<Typography>Boom</Typography>
</Story>

<Story name="tag props">
	<Typography tag="h1">h1 tag</Typography>
	<Typography tag="h2">h2 tag</Typography>
	<Typography tag="h3">h3 tag</Typography>
	<Typography tag="h4">h4 tag</Typography>
	<Typography tag="h5">h5 tag</Typography>
	<Typography tag="p">p tag</Typography>
	<Typography tag="span">span tag</Typography>
</Story>

<Story name="customizer">
	<Typography
		>the quick brown fox jumped over a red dog, THE QUICK BROWN FOX JUMPED OVER A RED DOG</Typography
	>

	<H11YRangeInput
		max={RoboFlexValues.GRAD.max}
		min={RoboFlexValues.GRAD.min}
		bind:value={GRAD}
		name={GRADName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.XOPQ.max}
		min={RoboFlexValues.XOPQ.min}
		bind:value={XOPQ}
		name={XOPQName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.XTRA.max}
		min={RoboFlexValues.XTRA.min}
		bind:value={XTRA}
		name={XTRAName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.YOPQ.max}
		min={RoboFlexValues.YOPQ.min}
		bind:value={YOPQ}
		name={YOPQName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.YTAS.max}
		min={RoboFlexValues.YTAS.min}
		bind:value={YTAS}
		name={YTASName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.YTDE.max}
		min={RoboFlexValues.YTDE.min}
		bind:value={YTDE}
		name={YTDEName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.YTFI.max}
		min={RoboFlexValues.YTFI.min}
		bind:value={YTFI}
		name={YTFIName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.YTLC.max}
		min={RoboFlexValues.YTLC.min}
		bind:value={YTLC}
		name={YTLCName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.YTUC.max}
		min={RoboFlexValues.YTUC.min}
		bind:value={YTUC}
		name={YTUCName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.opsz.max}
		min={RoboFlexValues.opsz.min}
		bind:value={opsz}
		name={opszName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.slnt.max}
		min={RoboFlexValues.slnt.min}
		bind:value={slnt}
		name={slntName}
		label={slntName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.wdth.max}
		min={RoboFlexValues.wdth.min}
		bind:value={wdth}
		name={wdthName}
	/>
	<H11YRangeInput
		max={RoboFlexValues.wght.max}
		min={RoboFlexValues.wght.min}
		bind:value={wght}
		name={wghtName}
	/>

	<Typography
		fontParams={{ GRAD, XOPQ, XTRA, YOPQ, YTAS, YTDE, YTFI, YTLC, YTUC, opsz, slnt, wdth, wght }}
		>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345467890!@#$%^&*()</Typography
	>
	<H11YButton on:click={handleClick}>Print to console</H11YButton>
</Story>
