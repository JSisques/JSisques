import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Orientación del divisor",
    },
    orientation: {
      control: "radio",
      options: ["left", "center", "right"],
      description: "Alineación horizontal (solo para variante horizontal)",
    },
    thickness: {
      control: "select",
      options: ["thin", "medium", "thick"],
      description: "Grosor del divisor",
    },
    label: {
      control: "text",
      description: "Texto opcional para mostrar en el divisor",
    },
    color: {
      control: "color",
      description: "Color personalizado",
    },
    gradient: {
      control: "boolean",
      description: "Aplicar efecto de gradiente",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    variant: "horizontal",
    thickness: "thin",
  },
};

export const Thick: Story = {
  args: {
    variant: "horizontal",
    thickness: "thick",
  },
};

export const Colored: Story = {
  args: {
    variant: "horizontal",
    thickness: "medium",
    color: "#ff4d4d",
  },
};

export const WithLabel: Story = {
  args: {
    variant: "horizontal",
    label: "O",
    thickness: "thin",
  },
};

export const Gradient: Story = {
  args: {
    variant: "horizontal",
    thickness: "medium",
    gradient: true,
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: "200px", display: "flex", alignItems: "center" }}>
      <div className="p-4">Contenido izquierdo</div>
      <Divider variant="vertical" thickness="medium" />
      <div className="p-4">Contenido derecho</div>
    </div>
  ),
};

export const WithLabelAndGradient: Story = {
  args: {
    variant: "horizontal",
    label: "SECCIÓN",
    thickness: "medium",
    gradient: true,
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-700">Divisor simple</p>
        <Divider />
      </div>

      <div>
        <p className="mb-2 text-sm text-gray-700">Divisor grueso</p>
        <Divider thickness="thick" />
      </div>

      <div>
        <p className="mb-2 text-sm text-gray-700">Divisor con etiqueta</p>
        <Divider label="SECCIÓN" />
      </div>

      <div>
        <p className="mb-2 text-sm text-gray-700">Divisor con gradiente</p>
        <Divider gradient thickness="medium" />
      </div>

      <div>
        <p className="mb-2 text-sm text-gray-700">
          Divisor alineado a la izquierda
        </p>
        <Divider orientation="left" />
      </div>

      <div style={{ height: "100px", display: "flex", alignItems: "center" }}>
        <p className="text-sm text-gray-700">Divisor vertical</p>
        <Divider variant="vertical" className="mx-4" />
        <p className="text-sm text-gray-700">Contenido separado</p>
      </div>
    </div>
  ),
};
