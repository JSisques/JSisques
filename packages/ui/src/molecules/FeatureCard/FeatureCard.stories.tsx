import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "./FeatureCard";
import {
  Globe,
  Code,
  Laptop,
  Palette,
  LineChart,
  Zap,
  Layers,
  Target,
  Upload,
  Smartphone,
} from "lucide-react";

const meta: Meta<typeof FeatureCard> = {
  title: "Molecules/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "object" },
      description: "El icono a mostrar (componente React o emoji)",
    },
    emojiSize: {
      control: { type: "number", min: 16, max: 100, step: 4 },
      description:
        "Tamaño del emoji en píxeles (solo aplica cuando el icono es un emoji)",
    },
    title: {
      control: "text",
      description: "Título de la característica",
    },
    description: {
      control: "text",
      description: "Descripción de la característica",
    },
    background: {
      control: "select",
      options: ["dark", "light", "transparent"],
      description: "Color de fondo de la tarjeta",
    },
    borderRadius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "full"],
      description: "Tamaño del radio de borde",
    },
    hoverEffect: {
      control: "select",
      options: [
        "none",
        "lift",
        "scale",
        "border",
        "glow",
        "rotate",
        "color-shift",
        "brightness",
        "blur-bg",
        "zoom-icon",
      ],
      description: "Tipo de efecto hover",
    },
    iconPosition: {
      control: "radio",
      options: ["left", "center", "right"],
      description: "Posición del icono",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

// Default example based on the image
export const Default: Story = {
  args: {
    icon: <Globe size={48} color="#4DABF7" />,
    title: "Immersive Websites",
    description:
      "Crafting responsive, interactive websites that captivate users and drive engagement.",
    background: "dark",
    borderRadius: "lg",
    hoverEffect: "lift",
    iconPosition: "center",
  },
};

export const LightBackground: Story = {
  args: {
    icon: <Code size={48} color="#4C6EF5" />,
    title: "Clean Code",
    description:
      "Writing maintainable, efficient code that scales with your business needs.",
    background: "light",
    borderRadius: "lg",
    hoverEffect: "lift",
  },
};

export const RoundedBorders: Story = {
  args: {
    icon: <Laptop size={48} color="#FA5252" />,
    title: "Cross-Platform",
    description:
      "Building solutions that work seamlessly across all devices and platforms.",
    background: "dark",
    borderRadius: "xl",
    hoverEffect: "lift",
  },
};

export const NoHoverEffect: Story = {
  args: {
    icon: <Palette size={48} color="#51CF66" />,
    title: "Beautiful UI/UX",
    description:
      "Designing intuitive, aesthetically pleasing interfaces that users love.",
    background: "dark",
    borderRadius: "lg",
    hoverEffect: "none",
  },
};

export const IconLeft: Story = {
  args: {
    icon: <Zap size={48} color="#FF922B" />,
    title: "Fast Development",
    description:
      "Quick development cycles with continuous delivery and improvement.",
    background: "dark",
    borderRadius: "lg",
    iconPosition: "left",
  },
};

export const IconRight: Story = {
  args: {
    icon: <LineChart size={48} color="#12B886" />,
    title: "Data Analytics",
    description:
      "Insightful metrics and analytics to help you make data-driven decisions.",
    background: "dark",
    borderRadius: "lg",
    iconPosition: "right",
  },
};

// Emoji examples
export const WithEmojis: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <FeatureCard
        icon="🚀"
        emojiSize={48}
        title="Fast Performance"
        description="Lightning-fast load times and smooth interactions for your users."
        background="dark"
      />
      <FeatureCard
        icon="🔒"
        emojiSize={48}
        title="Secure & Reliable"
        description="Security best practices and reliable uptime for peace of mind."
        background="dark"
      />
      <FeatureCard
        icon="💡"
        emojiSize={48}
        title="Innovative Solutions"
        description="Creative approaches to solve your business challenges."
        background="dark"
      />
      <FeatureCard
        icon="🔍"
        emojiSize={48}
        title="SEO Optimized"
        description="Better visibility and ranking in search engines."
        background="dark"
      />
    </div>
  ),
};

// Emoji sizes example
export const EmojiSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-xl">
      <FeatureCard
        icon="🎯"
        emojiSize={32}
        title="Small Emoji (32px)"
        description="A feature card with a smaller emoji icon."
        background="dark"
      />
      <FeatureCard
        icon="🎯"
        emojiSize={48}
        title="Medium Emoji (48px)"
        description="A feature card with a medium-sized emoji icon."
        background="dark"
      />
      <FeatureCard
        icon="🎯"
        emojiSize={64}
        title="Large Emoji (64px)"
        description="A feature card with a larger emoji icon."
        background="dark"
      />
    </div>
  ),
};

// Hover effects examples
export const HoverEffects: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">
          Lift Effect (Default)
        </span>
        <FeatureCard
          icon={<Globe size={40} color="#4DABF7" />}
          title="Lift Hover"
          description="Card slightly rises up on hover with shadow."
          background="dark"
          hoverEffect="lift"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Scale Effect</span>
        <FeatureCard
          icon={<Zap size={40} color="#FF922B" />}
          title="Scale Hover"
          description="Card slightly grows in size on hover."
          background="dark"
          hoverEffect="scale"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Border Effect</span>
        <FeatureCard
          icon={<Target size={40} color="#FA5252" />}
          title="Border Hover"
          description="Card displays a colored border on hover."
          background="dark"
          hoverEffect="border"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Glow Effect</span>
        <FeatureCard
          icon={<Layers size={40} color="#4C6EF5" />}
          title="Glow Hover"
          description="Card emits a subtle glow effect on hover."
          background="dark"
          hoverEffect="glow"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Rotate Effect</span>
        <FeatureCard
          icon={<Code size={40} color="#51CF66" />}
          title="Rotate Hover"
          description="Card slightly rotates on hover."
          background="dark"
          hoverEffect="rotate"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">
          Color Shift Effect
        </span>
        <FeatureCard
          icon={<Palette size={40} color="#FAB005" />}
          title="Color Shift"
          description="Card changes background color on hover."
          background="dark"
          hoverEffect="color-shift"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">
          Brightness Effect
        </span>
        <FeatureCard
          icon={<Upload size={40} color="#BE4BDB" />}
          title="Brightness"
          description="Card changes brightness on hover."
          background="dark"
          hoverEffect="brightness"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">
          Blur Background Effect
        </span>
        <FeatureCard
          icon={<Laptop size={40} color="#15AABF" />}
          title="Blur Background"
          description="Card background gets a blur effect on hover."
          background="dark"
          hoverEffect="blur-bg"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">
          Zoom Icon Effect
        </span>
        <FeatureCard
          icon={<Smartphone size={40} color="#FD7E14" />}
          title="Zoom Icon"
          description="Only the icon grows on hover."
          background="dark"
          hoverEffect="zoom-icon"
        />
      </div>
    </div>
  ),
};

// Group of feature cards with different icon positions
export const IconPositions: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-xl">
      <FeatureCard
        icon={<Globe size={48} color="#4DABF7" />}
        title="Left Icon Position"
        description="Icon aligned to the left side of the card."
        background="dark"
        iconPosition="left"
      />
      <FeatureCard
        icon={<Code size={48} color="#4C6EF5" />}
        title="Center Icon Position"
        description="Icon aligned to the center of the card (default)."
        background="dark"
        iconPosition="center"
      />
      <FeatureCard
        icon={<Laptop size={48} color="#FA5252" />}
        title="Right Icon Position"
        description="Icon aligned to the right side of the card."
        background="dark"
        iconPosition="right"
      />
    </div>
  ),
};

// Mix of emoji and icon examples
export const MixedIconTypes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <FeatureCard
        icon={<Globe size={48} color="#4DABF7" />}
        title="Web Development"
        description="Building responsive websites with modern technologies."
        background="dark"
      />
      <FeatureCard
        icon="💻"
        emojiSize={48}
        title="Software Development"
        description="Creating robust applications for your business needs."
        background="dark"
      />
      <FeatureCard
        icon={<LineChart size={48} color="#12B886" />}
        title="Data Analysis"
        description="Extracting insights from your business data."
        background="dark"
      />
      <FeatureCard
        icon="📱"
        emojiSize={48}
        title="Mobile Apps"
        description="Native and cross-platform mobile applications."
        background="dark"
      />
    </div>
  ),
};

// Group of feature cards
export const FeatureGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <FeatureCard
        icon={<Globe size={48} color="#4DABF7" />}
        title="Immersive Websites"
        description="Crafting responsive, interactive websites that captivate users and drive engagement."
        background="dark"
      />
      <FeatureCard
        icon={<Code size={48} color="#4C6EF5" />}
        title="Clean Code"
        description="Writing maintainable, efficient code that scales with your business needs."
        background="dark"
      />
      <FeatureCard
        icon={<LineChart size={48} color="#FAB005" />}
        title="Performance Optimization"
        description="Improving load times and overall performance for better user experience."
        background="dark"
      />
      <FeatureCard
        icon={<Zap size={48} color="#FF922B" />}
        title="Fast Iterations"
        description="Quick development cycles with continuous delivery and improvement."
        background="dark"
      />
    </div>
  ),
};
