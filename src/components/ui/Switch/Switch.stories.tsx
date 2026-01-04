import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { Switch } from "./Switch";

const meta = {
  component: Switch,
  decorators: [
    (Story) => (
      <div style={{ margin: "1em" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    onCheckedChange: { action: "onCheckedChange" },
    className: { control: "text" },
    thumbClassName: { control: "text" },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    defaultChecked: false,
    "aria-label": "Theme: Light mode on",
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    "aria-label": "Theme: Dark mode on",
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: false,
    disabled: true,
    "aria-label": "Toggle theme",
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    "aria-label": "Toggle theme",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(true);

    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 14 }}>
          {checked ? "Dark" : "Light"}
        </span>

        <Switch
          {...args}
          checked={checked}
          onCheckedChange={(next) => {
            setChecked(next);
            args.onCheckedChange?.(next);
          }}
          aria-label={`Theme: ${checked ? "Dark mode on" : "Light mode on"}`}
        />
      </div>
    );
  },
  args: {
    disabled: false,
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const id = React.useId();
    const [checked, setChecked] = React.useState(false);

    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
        <label htmlFor={id} style={{ fontSize: 14 }}>
          {checked ? "Dark mode" : "Light mode"}
        </label>

        <Switch
          {...args}
          id={id}
          checked={checked}
          onCheckedChange={(next) => {
            setChecked(next);
            args.onCheckedChange?.(next);
          }}
          aria-describedby={`${id}-state`}
        />

        <span id={`${id}-state`} className="sr-only">
          {checked ? "Dark mode enabled" : "Light mode enabled"}
        </span>
      </div>
    );
  },
  args: {},
};
