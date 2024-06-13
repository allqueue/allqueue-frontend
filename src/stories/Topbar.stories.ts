import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Topbar } from './Topbar';

const meta = {
  title: 'Example/Topbar',
  component: Topbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    
  },
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {};
