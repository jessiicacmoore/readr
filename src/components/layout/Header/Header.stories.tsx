import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';

const meta = {
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    logoHref: { control: 'text' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoHref: '/',
  },
};

export const NarrowViewport: Story = {
  decorators: [
    (Story) => (
      <div style={{ margin: '1em', maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    logoHref: '/',
  },
};
