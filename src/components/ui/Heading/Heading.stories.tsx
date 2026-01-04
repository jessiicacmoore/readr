import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Heading';

const meta = {
  component: Heading,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em', maxWidth: 720 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    size: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    children: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    level: 2,
    children: 'Heading',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading level 1</Heading>
      <Heading level={2}>Heading level 2</Heading>
      <Heading level={3}>Heading level 3</Heading>
      <Heading level={4}>Heading level 4</Heading>
      <Heading level={5}>Heading level 5</Heading>
      <Heading level={6}>Heading level 6</Heading>
    </div>
  ),
  argTypes: {
    level: { control: false },
    size: { control: false },
    children: { control: false },
    className: { control: false },
  },
};

export const SizeOverride: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1">
        <Heading level={2} size={3}>
          Semantically an h2, visually sized like h3
        </Heading>
        <p className="text-sm text-text-muted">level=2, size=3</p>
      </div>

      <div className="space-y-1">
        <Heading level={3} size={2}>
          Semantically an h3, visually sized like h2
        </Heading>
        <p className="text-sm text-text-muted">level=3, size=2</p>
      </div>
    </div>
  ),
  argTypes: {
    level: { control: false },
    size: { control: false },
    children: { control: false },
    className: { control: false },
  },
};

export const LongTextWrapping: Story = {
  args: {
    level: 2,
    children:
      'A longer heading to confirm wrapping, line-height, and how this looks across breakpoints when the title spans multiple lines',
  },
};

export const WithCustomClassName: Story = {
  args: {
    level: 3,
    children: 'Heading with custom className',
    className: 'text-brand-primary',
  },
};
