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


export const InputDefault: Story = {
  args: {
    label: '라벨',
    placeholder: '텍스트를 입력해주세요.',
    onInput: (value) => {
      console.log(value);
    }
  },
};

export const InputVertical: Story = {
  args: {
    type: 'vertical',
    label: '라벨',
    placeholder: 'light mode',
    height: '32px',
    width: '200px',
    prefixIcon: "/src/stories/assets/discord.svg",
    suffixIcon: "/src/stories/assets/discord.svg",
    theme: 'light',
    onInput: (value) => {
      console.log(value);
    }
  },
};
export const InputHorizontal: Story = {
  args: {
    type: 'horizontal',
    label: '라벨',
    placeholder: '비활성화 Input',
    height: '40px',
    width: '220px',
    prefixIcon: "@/stories/assets/discord.svg",
    disabled: true,
    onInput: (value) => {
      console.log(value);
    }
  },
};


