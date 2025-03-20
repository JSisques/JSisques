import { Meta, StoryObj } from "@storybook/react";
import { Footer, FooterProps } from "./Footer";
import { SocialButtonGroup } from "../../molecules/SocialButtonGroup";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Componente de pie de página con múltiples variantes, temas y tamaños para adaptarse a diferentes diseños de sitios web.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["simple", "multi-column", "centered", "minimal"],
      description: "Estilo de disposición del footer",
      table: {
        defaultValue: { summary: "simple" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamaño del footer",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    theme: {
      control: "select",
      options: ["light", "dark", "colored"],
      description: "Tema de color del footer",
      table: {
        defaultValue: { summary: "light" },
      },
    },
    logo: {
      description: "Logo o nombre de la empresa",
    },
    description: {
      description: "Descripción de la empresa o del sitio",
    },
    columns: {
      description: "Columnas con enlaces para la variante multi-columna",
    },
    links: {
      description: "Enlaces de navegación principales",
    },
    socialLinks: {
      description: "Enlaces a redes sociales",
    },
    contactInfo: {
      description: "Información de contacto",
    },
    copyright: {
      description: "Texto de copyright",
      table: {
        defaultValue: { summary: "All rights reserved." },
      },
    },
    showYear: {
      description: "Mostrar el año actual en el copyright",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    bottomContent: {
      description: "Contenido adicional en la parte inferior del footer",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

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
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Blog", href: "#" },
];

const mockColumns = [
  {
    title: "Products",
    links: [
      { label: "Product 1", href: "#" },
      { label: "Product 2", href: "#" },
      { label: "Product 3", href: "#" },
      { label: "Product 4", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Legal", href: "#" },
    ],
  },
];

const mockSocialLinks = {
  twitter: "https://twitter.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
};

const mockContactInfo = {
  email: "contact@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, City, Country",
};

export const Simple: Story = {
  args: {
    variant: "simple",
    size: "md",
    theme: "light",
    logo: mockLogo,
    description:
      "We are a company dedicated to creating amazing products and providing excellent service to our customers.",
    links: mockLinks,
    socialLinks: mockSocialLinks,
    contactInfo: mockContactInfo,
    copyright: "All rights reserved.",
    showYear: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disposición simple con logo, descripción, enlaces, información de contacto y redes sociales.",
      },
    },
  },
};

export const MultiColumn: Story = {
  args: {
    variant: "multi-column",
    size: "md",
    theme: "light",
    logo: mockLogo,
    description:
      "We are a company dedicated to creating amazing products and providing excellent service to our customers.",
    columns: mockColumns,
    socialLinks: mockSocialLinks,
    contactInfo: mockContactInfo,
    copyright: "All rights reserved.",
    showYear: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disposición con múltiples columnas de enlaces, ideal para sitios con muchas secciones.",
      },
    },
  },
};

export const Centered: Story = {
  args: {
    variant: "centered",
    size: "md",
    theme: "light",
    logo: mockLogo,
    description:
      "We are a company dedicated to creating amazing products and providing excellent service to our customers.",
    links: mockLinks,
    socialLinks: mockSocialLinks,
    copyright: "All rights reserved.",
    showYear: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disposición centrada con todos los elementos alineados en el centro, ideal para sitios minimalistas.",
      },
    },
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
    size: "md",
    theme: "light",
    logo: mockLogo,
    links: mockLinks,
    socialLinks: mockSocialLinks,
    copyright: "All rights reserved.",
    showYear: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Diseño minimalista con logo a la izquierda, enlaces de navegación centrados, redes sociales a la derecha y copyright separado por un divisor en la parte inferior.",
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    ...MultiColumn.args,
    theme: "dark",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo del footer con tema oscuro, ideal para sitios con modo oscuro o de alto contraste.",
      },
    },
  },
};

export const ColoredTheme: Story = {
  args: {
    ...Centered.args,
    theme: "colored",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo del footer con tema de color, utilizando tonos azules que pueden adaptarse según el tema del sitio.",
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
          "Variante de tamaño pequeño, ideal para sitios con espacio limitado o para móviles.",
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    ...MultiColumn.args,
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variante de tamaño grande con mayor espaciado y tipografía más grande, ideal para destacar el footer.",
      },
    },
  },
};

export const WithCustomBottomContent: Story = {
  args: {
    ...Simple.args,
    bottomContent: (
      <div className="text-center text-sm text-gray-500 mt-4">
        <p>Additional custom content can be added here.</p>
        <p className="mt-2">
          <a href="#" className="underline hover:text-blue-600">
            Terms of Service
          </a>
          {" | "}
          <a href="#" className="underline hover:text-blue-600">
            Privacy Policy
          </a>
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Ejemplo de cómo añadir contenido personalizado en la parte inferior del footer, como enlaces a términos de servicio o políticas de privacidad.",
      },
    },
  },
};
