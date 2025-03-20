import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
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
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
      ],
      description: "Variante tipográfica",
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Alineación del texto",
    },
    gutterBottom: {
      control: "boolean",
      description: "Agregar margen inferior",
    },
    gradient: {
      control: "boolean",
      description: "Aplicar gradiente al texto",
    },
    children: {
      control: "text",
      description: "Contenido de texto",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "body1",
    children: "Este es un texto de ejemplo en la variante por defecto.",
  },
};

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Encabezado Principal",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Encabezado Secundario",
  },
};

export const GradientHeading: Story = {
  args: {
    variant: "h2",
    children: "Encabezado con Gradiente",
    gradient: true,
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children:
      "Este es un texto pequeño que funciona como una leyenda para imágenes o elementos.",
  },
};

export const Overline: Story = {
  args: {
    variant: "overline",
    children: "TEXTO EN MAYÚSCULAS CON TRACKING AMPLIO",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">
        Body 1 - Este es el texto estándar utilizado para la mayoría de los
        párrafos y contenido.
      </Typography>
      <Typography variant="body2">
        Body 2 - Este es un texto secundario, generalmente más pequeño que el
        body1.
      </Typography>
      <Typography variant="caption">
        Caption - Utilizado para texto auxiliar y leyendas.
      </Typography>
      <Typography variant="overline">
        OVERLINE - TEXTO EN MAYÚSCULAS CON TRACKING
      </Typography>
    </div>
  ),
};
