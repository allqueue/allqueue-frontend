import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Example/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SelectTest: Story = {
  args: {
    options: [{
      label: '리그오브레전드',
      value: 'lol'
    }],
    label: 'test',
    name: 'ts'
  },
};


