import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost", "link"],
      description: "El estilo visual del botón",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "El tamaño del botón",
    },
    children: {
      control: "text",
      description: "El contenido del botón",
    },
    onClick: { action: "clicked" },
    disabled: {
      control: "boolean",
      description: "Estado deshabilitado del botón",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Botón con Gradiente",
    variant: "default",
    size: "default",
  },
};

export const Outline: Story = {
  args: {
    children: "Botón Outline",
    variant: "outline",
    size: "default",
  },
};

export const Ghost: Story = {
  args: {
    children: "Botón Ghost",
    variant: "ghost",
    size: "default",
  },
};

export const Link: Story = {
  args: {
    children: "Botón Link",
    variant: "link",
    size: "default",
  },
};

export const Small: Story = {
  args: {
    children: "Botón Pequeño",
    variant: "default",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Botón Grande",
    variant: "default",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Botón Deshabilitado",
    variant: "default",
    disabled: true,
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="default">Hablemos</Button>
      <Button variant="outline">Ver Proyecto</Button>
      <Button variant="ghost">Más Info</Button>
      <Button variant="link">Conoce Más</Button>
    </div>
  ),
};
