import type { Meta, StoryObj } from "@storybook/react";
import { SocialButtonGroup } from "./SocialButtonGroup";
import { SocialNetwork } from "../../atoms/SocialButton";

const meta: Meta<typeof SocialButtonGroup> = {
  title: "Molecules/SocialButtonGroup",
  component: SocialButtonGroup,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    profiles: {
      control: "object",
      description: "Array de perfiles sociales para mostrar",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Tamaño de los botones",
    },
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"],
      description: "Variante visual de los botones",
    },
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Dirección del grupo de botones",
    },
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      description: "Espacio entre botones",
    },
    openInNewTab: {
      control: "boolean",
      description: "Abrir enlaces en nueva pestaña",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialButtonGroup>;

const defaultProfiles = [
  { network: "github" as SocialNetwork, url: "https://github.com/jsisques" },
  {
    network: "linkedin" as SocialNetwork,
    url: "https://linkedin.com/in/jsisques",
  },
  { network: "twitter" as SocialNetwork, url: "https://twitter.com/jsisques" },
];

export const Default: Story = {
  args: {
    profiles: defaultProfiles,
    size: "md",
    variant: "default",
    direction: "horizontal",
    gap: "md",
    openInNewTab: true,
  },
};

export const AllProfiles: Story = {
  args: {
    profiles: [
      {
        network: "github" as SocialNetwork,
        url: "https://github.com/jsisques",
      },
      {
        network: "linkedin" as SocialNetwork,
        url: "https://linkedin.com/in/jsisques",
      },
      {
        network: "twitter" as SocialNetwork,
        url: "https://twitter.com/jsisques",
      },
      {
        network: "instagram" as SocialNetwork,
        url: "https://instagram.com/jsisques",
      },
      {
        network: "facebook" as SocialNetwork,
        url: "https://facebook.com/jsisques",
      },
      {
        network: "youtube" as SocialNetwork,
        url: "https://youtube.com/jsisques",
      },
    ],
    size: "md",
    variant: "default",
  },
};

export const Vertical: Story = {
  args: {
    profiles: defaultProfiles,
    direction: "vertical",
    gap: "md",
  },
};

export const Small: Story = {
  args: {
    profiles: defaultProfiles,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    profiles: defaultProfiles,
    size: "lg",
  },
};

export const OutlineVariant: Story = {
  args: {
    profiles: defaultProfiles,
    variant: "outline",
  },
};

export const GhostVariant: Story = {
  args: {
    profiles: defaultProfiles,
    variant: "ghost",
  },
};

export const CustomGap: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-600 mb-2">XS Gap</p>
        <SocialButtonGroup profiles={defaultProfiles} gap="xs" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-600 mb-2">SM Gap</p>
        <SocialButtonGroup profiles={defaultProfiles} gap="sm" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-600 mb-2">MD Gap</p>
        <SocialButtonGroup profiles={defaultProfiles} gap="md" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-600 mb-2">LG Gap</p>
        <SocialButtonGroup profiles={defaultProfiles} gap="lg" />
      </div>
    </div>
  ),
};
