import type { Meta, StoryObj } from "@storybook/react";
import { SocialButton } from "./SocialButton";

const meta: Meta<typeof SocialButton> = {
  title: "Atoms/SocialButton",
  component: SocialButton,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    network: {
      control: "select",
      options: [
        "github",
        "linkedin",
        "twitter",
        "instagram",
        "facebook",
        "youtube",
      ],
      description: "Red social a mostrar",
    },
    href: {
      control: "text",
      description: "URL de destino",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Tamaño del botón",
    },
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"],
      description: "Variante visual del botón",
    },
    openInNewTab: {
      control: "boolean",
      description: "Abrir enlace en nueva pestaña",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialButton>;

export const Default: Story = {
  args: {
    network: "github",
    href: "https://github.com",
    size: "md",
    variant: "default",
    openInNewTab: true,
  },
};

export const LinkedIn: Story = {
  args: {
    network: "linkedin",
    href: "https://linkedin.com",
    size: "md",
    variant: "default",
    openInNewTab: true,
  },
};

export const Small: Story = {
  args: {
    network: "twitter",
    href: "https://twitter.com",
    size: "sm",
    variant: "default",
    openInNewTab: true,
  },
};

export const Large: Story = {
  args: {
    network: "instagram",
    href: "https://instagram.com",
    size: "lg",
    variant: "default",
    openInNewTab: true,
  },
};

export const Outline: Story = {
  args: {
    network: "facebook",
    href: "https://facebook.com",
    size: "md",
    variant: "outline",
    openInNewTab: true,
  },
};

export const Ghost: Story = {
  args: {
    network: "youtube",
    href: "https://youtube.com",
    size: "md",
    variant: "ghost",
    openInNewTab: true,
  },
};

export const AllNetworks: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 justify-center">
      <SocialButton network="github" href="https://github.com" />
      <SocialButton network="linkedin" href="https://linkedin.com" />
      <SocialButton network="twitter" href="https://twitter.com" />
      <SocialButton network="instagram" href="https://instagram.com" />
      <SocialButton network="facebook" href="https://facebook.com" />
      <SocialButton network="youtube" href="https://youtube.com" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <SocialButton network="github" href="https://github.com" size="sm" />
      <SocialButton network="github" href="https://github.com" size="md" />
      <SocialButton network="github" href="https://github.com" size="lg" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 justify-center">
      <SocialButton
        network="linkedin"
        href="https://linkedin.com"
        variant="default"
      />
      <SocialButton
        network="linkedin"
        href="https://linkedin.com"
        variant="outline"
      />
      <SocialButton
        network="linkedin"
        href="https://linkedin.com"
        variant="ghost"
      />
    </div>
  ),
};
