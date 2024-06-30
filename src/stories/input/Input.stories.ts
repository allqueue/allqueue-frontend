import type { Meta, StoryObj, StoryFn  } from '@storybook/react';
// import { useArgs } from '@storybook/preview-api';
import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    value: { control: 'text' },
  },
  args: {
    value: '텍스트',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// const Template: StoryFn<typeof meta> = (args) => {
//   const [{ value }, updateArgs] = useArgs();

//   const handleInput = (newValue: string) => {
//     updateArgs({ value: newValue });
//   };

//   return <Input {...args} value={value} onInput={handleInput} />;
// };

// export const InputDefault = (args: typeof meta) => {
//   const [{ value }, updateArgs] = useArgs();

//   const handleInput = (newValue: string) => {
//     updateArgs({ value: newValue });
//   };

//   return <Input {...args} value={value} onInput={handleInput} />;
//   // render: Template,
//   // args: {
//   //   label: '라벨',
//   //   placeholder: '텍스트를 입력해주세요.',
//   //   onInput: (value) => {
//   //     console.log(value);
//   //   }
//   // },
// };

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
    prefixIcon: require("/src/stories/assets/discord.svg"),
    suffixIcon: require("/src/stories/assets/discord.svg"),
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
    prefixIcon: require("@/stories/assets/discord.svg"),
    disabled: true,
    onInput: (value) => {
      console.log(value);
    }
  },
};


