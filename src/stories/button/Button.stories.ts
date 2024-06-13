import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ButtonLargeWide: Story = {
  args: {
    size: 'large-wide',
    text: 'MATCH',
    game: 'lol'
  },
};

export const ButtonWaiting: Story = {
  args: {
    size: 'large-wide',
    text: 'MATCH',
    game: 'lol-waiting'
  },
};