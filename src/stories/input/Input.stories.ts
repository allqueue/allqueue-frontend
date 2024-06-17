import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const InputTest: Story = {
  args: {
    type: 'vertical',
    label: '라벨',
    width: '180px',
    prefixIcon: "src/stories/assets/discord.svg",
    suffixIcon: "src/stories/assets/discord.svg",
    onInput: (value) => {
      console.log(value);
    }
  },
};


