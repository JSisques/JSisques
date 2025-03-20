import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Texto principal del radio button",
    },
    description: {
      control: "text",
      description: "Texto descriptivo secundario",
    },
    disabled: {
      control: "boolean",
      description: "Estado deshabilitado",
    },
    checked: {
      control: "boolean",
      description: "Estado seleccionado",
    },
    name: {
      control: "text",
      description: "Nombre del grupo de radio buttons",
    },
    error: {
      control: "text",
      description: "Mensaje de error",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Radio option",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Radio with description",
    description: "This is a description for the radio button",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked radio",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled radio",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Radio with error",
    error: "There was an error with this selection",
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div className="space-y-2">
      <Radio
        name="subscription"
        value="free"
        label="Free Plan"
        description="Basic features, up to 3 projects"
        defaultChecked
      />
      <Radio
        name="subscription"
        value="pro"
        label="Pro Plan"
        description="Advanced features, unlimited projects"
      />
      <Radio
        name="subscription"
        value="enterprise"
        label="Enterprise Plan"
        description="Custom features, priority support"
      />
    </div>
  ),
};
