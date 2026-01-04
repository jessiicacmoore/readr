import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    href: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Logo {...args} size="sm" />
      <Logo {...args} size="md" />
      <Logo {...args} size="lg" />
    </div>
  ),
};

export const AsLink: Story = {
  args: {
    href: '/',
  },
};

export const CustomText: Story = {
  args: {
    children: 'Readr Studio',
  },
};
