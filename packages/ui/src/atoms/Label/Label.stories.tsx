import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    required: {
      control: "boolean",
      description: "Indica si el campo es requerido",
    },
    children: {
      control: "text",
      description: "Texto del label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Nombre",
  },
};

export const Required: Story = {
  args: {
    children: "Correo electrónico",
    required: true,
  },
};

export const WithForm: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Nombre</Label>
        <input
          id="name"
          className="w-full p-2 rounded bg-white/10 border border-white/20 text-white"
          type="text"
        />
      </div>
      <div>
        <Label htmlFor="email" required>
          Correo electrónico
        </Label>
        <input
          id="email"
          className="w-full p-2 rounded bg-white/10 border border-white/20 text-white"
          type="email"
        />
      </div>
    </div>
  ),
};
