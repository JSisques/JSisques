import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HeroSection, HeroSectionProps } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Organisms/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Componente de sección hero con múltiples variantes, temas y características para adaptarse a diferentes diseños de sitios web.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["classic", "centered", "split", "minimal", "video"],
      description: "Estilo de disposición del hero",
      table: {
        defaultValue: { summary: "classic" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del hero",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    theme: {
      control: "select",
      options: ["light", "dark", "gradient", "image"],
      description: "Tema de color del hero",
      table: {
        defaultValue: { summary: "light" },
      },
    },
    contentAlignment: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Alineación del contenido",
      table: {
        defaultValue: { summary: "left" },
      },
    },
    imagePosition: {
      control: "select",
      options: ["left", "right", "background"],
      description: "Posición de la imagen (para variante split)",
      table: {
        defaultValue: { summary: "right" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

// Ejemplo de botones
const mockButtons = [
  { label: "Ver Proyectos", variant: "default" as const },
  { label: "Contáctanos", variant: "outline" as const },
];

// Ejemplo de pre-título
const mockPreTitle = (
  <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
    Nuevo Servicio
  </div>
);

// Ejemplo de contenido extra
const mockExtraContent = (
  <div className="flex items-center justify-center gap-10 mt-10">
    <img
      src="https://via.placeholder.com/100x50"
      alt="Logo Cliente 1"
      className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
    />
    <img
      src="https://via.placeholder.com/100x50"
      alt="Logo Cliente 2"
      className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
    />
    <img
      src="https://via.placeholder.com/100x50"
      alt="Logo Cliente 3"
      className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
    />
  </div>
);

export const Classic: Story = {
  args: {
    variant: "classic",
    size: "md",
    theme: "light",
    title: "Diseñamos y desarrollamos experiencias digitales excepcionales",
    highlightWords: ["excepcionales"],
    subtitle: "Servicios de desarrollo web a medida para tu negocio",
    description:
      "Creamos aplicaciones web y sitios personalizados con las últimas tecnologías para ayudar a tu empresa a crecer y destacar en el mundo digital.",
    buttons: mockButtons,
    contentAlignment: "left",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante clásica con título, subtítulo, descripción y botones de llamada a la acción, alineados a la izquierda.",
      },
    },
  },
};

export const Centered: Story = {
  args: {
    variant: "centered",
    size: "md",
    theme: "light",
    title: "Convierte visitantes en clientes",
    highlightWords: ["clientes"],
    subtitle: "Soluciones digitales que impulsan resultados",
    description:
      "Nuestro equipo de expertos está listo para ayudarte a transformar tu presencia digital y conseguir los resultados que buscas con estrategias personalizadas.",
    buttons: mockButtons,
    image: "https://via.placeholder.com/1200x600",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante centrada con imagen debajo del contenido, ideal para destacar tanto el texto como un visual importante.",
      },
    },
  },
};

export const Split: Story = {
  args: {
    variant: "split",
    size: "md",
    theme: "light",
    title: "Transforma tu idea en una aplicación real",
    highlightWords: ["Transforma", "aplicación"],
    subtitle: "Desarrollo personalizado de alto rendimiento",
    description:
      "Trabajamos con las tecnologías más modernas para crear aplicaciones rápidas, seguras y escalables que satisfacen las necesidades de tu negocio y tus usuarios.",
    buttons: mockButtons,
    image: "https://via.placeholder.com/600x800",
    imagePosition: "right",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante dividida con texto a un lado e imagen al otro, ideal para balancear contenido y elementos visuales.",
      },
    },
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    size: "md",
    theme: "light",
    title: "Diseño web simplificado",
    highlightWords: ["simplificado"],
    subtitle: "Menos es más. Enfócate en lo esencial.",
    buttons: [{ label: "Comenzar", variant: "default" as const }],
    contentAlignment: "center",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante minimalista con solo título, subtítulo y un botón, ideal para páginas de aterrizaje simples y enfocadas.",
      },
    },
  },
};

export const WithVideo: Story = {
  args: {
    variant: "video",
    size: "lg",
    theme: "image",
    title: "Experiencias inmersivas",
    highlightWords: ["inmersivas"],
    subtitle: "Vive el futuro digital hoy",
    description:
      "Utilizamos las últimas tecnologías para crear experiencias que cautivan y sorprenden a los usuarios, generando recuerdos duraderos de tu marca.",
    buttons: mockButtons,
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32807-large.mp4",
    videoPoster: "https://via.placeholder.com/1920x1080",
    videoAutoplay: true,
    contentAlignment: "center",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante con video de fondo a pantalla completa, ideal para crear un impacto visual fuerte y moderno.",
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    ...Classic.args,
    theme: "dark",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero con tema oscuro, ideal para sitios con modo oscuro o de alto contraste.",
      },
    },
  },
};

export const GradientTheme: Story = {
  args: {
    ...Centered.args,
    theme: "gradient",
    variant: "centered",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero con fondo degradado de azul a índigo, creando un efecto visual atractivo y moderno.",
      },
    },
  },
};

export const WithBackgroundImage: Story = {
  args: {
    ...Classic.args,
    theme: "image",
    backgroundImage:
      "https://images.unsplash.com/photo-1607743386760-88f10eb85a79?q=80&w=2070",
    backgroundOverlay: "bg-black/60",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero con imagen de fondo y superposición oscura, ideal para crear contraste con el texto claro.",
      },
    },
  },
};

export const WithPreTitle: Story = {
  args: {
    ...Classic.args,
    preTitle: mockPreTitle,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero con un elemento visual antes del título principal, útil para destacar novedades o categorías.",
      },
    },
  },
};

export const WithExtraContent: Story = {
  args: {
    ...Classic.args,
    extraContent: mockExtraContent,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero con contenido adicional debajo de los botones, como logos de clientes o información complementaria.",
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    ...Split.args,
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero de gran tamaño con mayor espaciado y tipografía más grande, ideal para crear un impacto visual fuerte.",
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    ...Minimal.args,
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero de tamaño pequeño con menor espaciado, ideal para páginas donde el espacio es limitado.",
      },
    },
  },
};

export const RightAligned: Story = {
  args: {
    ...Classic.args,
    contentAlignment: "right",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero con contenido alineado a la derecha, ofreciendo una variación visual interesante.",
      },
    },
  },
};

export const LeftImageSplit: Story = {
  args: {
    ...Split.args,
    imagePosition: "left",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante dividida con imagen a la izquierda y texto a la derecha, ideal para crear variedad visual en la navegación.",
      },
    },
  },
};
