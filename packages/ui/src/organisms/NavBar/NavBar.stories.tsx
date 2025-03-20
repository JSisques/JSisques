import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NavBar, NavBarProps } from "./NavBar";
import { Button } from "../../atoms/Button";

const meta: Meta<typeof NavBar> = {
  title: "Organisms/NavBar",
  component: NavBar,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["simple", "centered", "full", "minimal"],
      description: "Estilo de disposición del NavBar",
      table: {
        defaultValue: { summary: "simple" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del NavBar",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    theme: {
      control: "select",
      options: ["light", "dark", "colored", "transparent"],
      description: "Tema de color del NavBar",
      table: {
        defaultValue: { summary: "light" },
      },
    },
    position: {
      control: "select",
      options: ["fixed", "sticky", "static"],
      description: "Posición del NavBar en la página",
      table: {
        defaultValue: { summary: "static" },
      },
    },
    scrollBehavior: {
      control: "boolean",
      description: "Cambio de apariencia al hacer scroll",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    enableSearch: {
      control: "boolean",
      description: "Mostrar campo de búsqueda",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

const mockLogo = (
  <div className="flex items-center">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="#4F46E5" />
      <path
        d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z"
        fill="white"
      />
    </svg>
    <span className="ml-3 text-xl font-bold">Company</span>
  </div>
);

const mockLinks = [
  { label: "Home", href: "#", isActive: true },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Contact", href: "#" },
];

const mockActions = [
  { label: "Login", variant: "ghost" as const, href: "#" },
  { label: "Sign Up", variant: "default" as const, href: "#" },
];

const mockSocialLinks = {
  twitter: "https://twitter.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const Simple: Story = {
  args: {
    variant: "simple",
    size: "md",
    theme: "light",
    position: "static",
    logo: mockLogo,
    links: mockLinks,
    actions: mockActions,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante simple con logo a la izquierda, enlaces de navegación y botones de acción.",
      },
    },
  },
};

export const Centered: Story = {
  args: {
    variant: "centered",
    size: "md",
    theme: "light",
    position: "static",
    logo: mockLogo,
    links: mockLinks,
    actions: mockActions,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante centrada con logo en el centro, enlaces de navegación debajo y botones de acción a la derecha.",
      },
    },
  },
};

export const Full: Story = {
  args: {
    variant: "full",
    size: "md",
    theme: "light",
    position: "static",
    logo: mockLogo,
    links: mockLinks,
    actions: mockActions,
    socialLinks: mockSocialLinks,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante completa con logo, enlaces, botones de acción y redes sociales.",
      },
    },
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    size: "md",
    theme: "light",
    position: "static",
    logo: mockLogo,
    links: mockLinks,
  },
  parameters: {
    docs: {
      description: {
        story: "Variante minimalista con solo logo y enlaces esenciales.",
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    ...Simple.args,
    theme: "dark",
  },
  parameters: {
    docs: {
      description: {
        story: "NavBar con tema oscuro, ideal para sitios con modo oscuro.",
      },
    },
  },
};

export const ColoredTheme: Story = {
  args: {
    ...Simple.args,
    theme: "colored",
  },
  parameters: {
    docs: {
      description: {
        story:
          "NavBar con tema de color azul, adaptable al estilo del sitio web.",
      },
    },
  },
};

export const TransparentTheme: Story = {
  args: {
    ...Simple.args,
    theme: "transparent",
    scrollBehavior: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "NavBar con fondo transparente que cambia al hacer scroll, ideal para páginas de inicio con héroes.",
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
};

export const WithSearch: Story = {
  args: {
    ...Full.args,
    enableSearch: true,
    searchPlaceholder: "Buscar...",
    onSearch: (query) => console.log("Búsqueda:", query),
  },
  parameters: {
    docs: {
      description: {
        story: "NavBar con funcionalidad de búsqueda integrada.",
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    ...Simple.args,
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story:
          "NavBar de tamaño grande con mayor espaciado y tipografía más grande.",
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    ...Simple.args,
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story:
          "NavBar de tamaño pequeño con menor espaciado, ideal para interfaces compactas.",
      },
    },
  },
};

export const FixedPosition: Story = {
  args: {
    ...Simple.args,
    position: "fixed",
    scrollBehavior: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "NavBar con posición fija en la parte superior de la página, permanece visible al hacer scroll.",
      },
    },
  },
};
