import type { Meta, StoryObj } from '@storybook/svelte';

import Typography from './Typography.svelte';
import TypographyView from './TypographyView.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
	title: 'Typography',
	component: Typography,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({ ...args }) => ({
	Component: TypographyView,
	props: args
});

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
	args: {}
};
