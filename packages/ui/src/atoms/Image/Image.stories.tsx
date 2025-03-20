import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "URL de la imagen",
    },
    alt: {
      control: "text",
      description: "Texto alternativo para la imagen (importante para SEO)",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "full", "custom"],
      description: "Tamaño predefinido de la imagen",
    },
    width: {
      control: { type: "number", min: 50, max: 1000, step: 10 },
      description: "Ancho personalizado (cuando size es 'custom')",
    },
    height: {
      control: { type: "number", min: 50, max: 1000, step: 10 },
      description: "Alto personalizado (cuando size es 'custom')",
    },
    shape: {
      control: "radio",
      options: ["square", "rounded", "circle"],
      description: "Forma del contenedor de la imagen",
    },
    objectFit: {
      control: "select",
      options: ["cover", "contain", "fill", "none"],
      description: "Cómo se debe ajustar la imagen dentro de su contenedor",
    },
    objectPosition: {
      control: "select",
      options: ["center", "top", "bottom", "left", "right"],
      description: "Posición de la imagen dentro de su contenedor",
    },
    shadow: {
      control: "boolean",
      description: "Activar sombra en la imagen",
    },
    hoverEffect: {
      control: "select",
      options: [
        "none",
        "zoom",
        "rotate",
        "brightUp",
        "fadeIn",
        "glow",
        "flipHorizontal",
        "flipVertical",
        "scale",
        "tilt",
      ],
      description: "Efecto aplicado al pasar el cursor",
    },
    hoverIntensity: {
      control: { type: "range", min: 1, max: 5, step: 1 },
      description: "Intensidad del efecto hover (1-5)",
    },
    filterEffect: {
      control: "select",
      options: [
        "none",
        "grayscale",
        "blur",
        "sepia",
        "saturate",
        "invert",
        "brightness",
        "contrast",
        "hueRotate",
        "duotone",
      ],
      description: "Filtro aplicado a la imagen",
    },
    filterIntensity: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      description: "Intensidad del filtro (0-100)",
    },
    caption: {
      control: "text",
      description: "Leyenda opcional para mostrar debajo de la imagen",
    },
    priority: {
      control: "boolean",
      description: "Carga prioritaria (para LCP - Largest Contentful Paint)",
    },
    blurEffect: {
      control: "boolean",
      description: "Activar efecto de blur-up durante la carga",
    },
    border: {
      control: "boolean",
      description: "Añadir borde a la imagen",
    },
    borderColor: {
      control: "color",
      description: "Color del borde",
    },
    hoverOverlay: {
      control: "boolean",
      description: "Mostrar overlay al pasar el cursor",
    },
    overlayColor: {
      control: "color",
      description: "Color del overlay",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472791108553-c9405341e398",
    alt: "Paisaje montañoso al atardecer",
    size: "md",
    shape: "rounded",
  },
};

export const Circle: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    alt: "Retrato de perfil de persona",
    size: "md",
    shape: "circle",
    objectFit: "cover",
  },
};

export const WithShadow: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    alt: "Gradiente abstracto",
    size: "md",
    shape: "rounded",
    shadow: true,
  },
};

export const WithCaption: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2",
    alt: "Atardecer en la playa",
    size: "md",
    caption: "Hermoso atardecer en la costa",
  },
};

export const Grayscale: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1560759226-14da22a643ef",
    alt: "Escena colorida convertida a escala de grises",
    size: "md",
    filterEffect: "grayscale",
    filterIntensity: 100,
  },
};

export const HoverZoom: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1611916656173-875e4277bea6",
    alt: "Imagen con efecto de zoom al hover",
    size: "md",
    hoverEffect: "zoom",
    hoverIntensity: 3,
  },
};

export const CustomSize: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    alt: "Imagen de tamaño personalizado",
    size: "custom",
    width: 400,
    height: 250,
  },
};

export const WithBorder: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    alt: "Imagen con borde",
    size: "md",
    border: true,
    borderColor: "rgba(0, 120, 255, 0.5)",
  },
};

export const WithOverlay: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1682687219800-bba120d709c5",
    alt: "Imagen con overlay al hover",
    size: "md",
    hoverOverlay: true,
    overlayColor: "rgba(255, 0, 0, 0.3)",
  },
};

export const FilterExamples: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-lg">
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen normal"
          size="sm"
          caption="Normal"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen con filtro grayscale"
          size="sm"
          filterEffect="grayscale"
          caption="Grayscale"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen con filtro sepia"
          size="sm"
          filterEffect="sepia"
          caption="Sepia"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen con filtro saturate"
          size="sm"
          filterEffect="saturate"
          filterIntensity={150}
          caption="Saturate"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen con filtro brillo"
          size="sm"
          filterEffect="brightness"
          filterIntensity={120}
          caption="Brightness"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen con filtro contraste"
          size="sm"
          filterEffect="contrast"
          filterIntensity={140}
          caption="Contrast"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen con filtro hue-rotate"
          size="sm"
          filterEffect="hueRotate"
          filterIntensity={50}
          caption="Hue Rotate"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen con filtro invert"
          size="sm"
          filterEffect="invert"
          filterIntensity={80}
          caption="Invert"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d"
          alt="Imagen con filtro duotone"
          size="sm"
          filterEffect="duotone"
          caption="Duotone"
        />
      </div>
    </div>
  ),
};

export const HoverEffectsExamples: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-lg">
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover zoom"
          size="sm"
          hoverEffect="zoom"
          caption="Zoom (hover)"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover rotate"
          size="sm"
          hoverEffect="rotate"
          caption="Rotate (hover)"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover brightUp"
          size="sm"
          hoverEffect="brightUp"
          caption="Bright Up (hover)"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover flipHorizontal"
          size="sm"
          hoverEffect="flipHorizontal"
          caption="Flip Horizontal (hover)"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover flipVertical"
          size="sm"
          hoverEffect="flipVertical"
          caption="Flip Vertical (hover)"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover tilt"
          size="sm"
          hoverEffect="tilt"
          caption="Tilt (hover)"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover overlay"
          size="sm"
          hoverOverlay={true}
          overlayColor="rgba(0, 0, 255, 0.3)"
          caption="Overlay (hover)"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover fadeIn"
          size="sm"
          hoverEffect="fadeIn"
          caption="Fade In (hover)"
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          alt="Imagen con hover glow"
          size="sm"
          hoverEffect="glow"
          shadow={true}
          caption="Glow (hover)"
        />
      </div>
    </div>
  ),
};
