import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Etiqueta del checkbox" },
    description: {
      control: "text",
      description: "Texto descriptivo adicional",
    },
    disabled: { control: "boolean", description: "Estado deshabilitado" },
    checked: { control: "boolean", description: "Estado marcado" },
    error: { control: "text", description: "Mensaje de error" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Acepto los términos y condiciones",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Suscribirme al newsletter",
    description:
      "Recibirás actualizaciones y noticias en tu correo electrónico",
  },
};

export const Checked: Story = {
  args: {
    label: "Opción seleccionada",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Opción no disponible",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Acepto los términos y condiciones",
    error: "Debes aceptar los términos para continuar",
  },
};

export const ControlledCheckbox: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        label="Checkbox controlado"
        description="Puedes marcar y desmarcar este checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <Checkbox label="Opción 1" defaultChecked />
        <Checkbox label="Opción 2" />
        <Checkbox label="Opción 3" />
        <Checkbox
          label="Opción con descripción"
          description="Información adicional sobre esta opción"
        />
      </div>
    );
  },
};
