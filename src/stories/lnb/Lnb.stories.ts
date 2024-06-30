import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Lnb } from './Lnb';

const meta = {
  title: 'Example/Lnb',
  component: Lnb,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    isVisible: true,
  },
} satisfies Meta<typeof Lnb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LnbTest: Story = {
  args: {
    isVisible: true,
    navItems: [
      {
        label: "홈",
        path: "/home",
        icon: require("/src/stories/assets/discord.svg")
      },
      {
        label: "사용자 프로필",
        path: "/profile"
      },
      {
        label: "매칭",
        path: "/match"
      },
    ]
  }
};
