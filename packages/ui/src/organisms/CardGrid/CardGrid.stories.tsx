import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardGrid } from "./CardGrid";
import { FeatureCard } from "../../molecules/FeatureCard/FeatureCard";
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
  Database,
  Shield,
} from "lucide-react";

const meta: Meta<typeof CardGrid> = {
  title: "Organisms/CardGrid",
  component: CardGrid,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: "select",
      options: ["grid", "masonry", "carousel", "list"],
      description: "Tipo de layout para organizar las cards",
    },
    gap: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Tamaño del espaciado entre cards",
    },
    alignment: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
      description: "Alineación vertical de las cards",
    },
    title: {
      control: "text",
      description: "Título opcional para la sección",
    },
    description: {
      control: "text",
      description: "Descripción opcional para la sección",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardGrid>;

// Generar cards de ejemplo para reutilizar en las stories
const generateDemoCards = (count: number) => {
  const icons = [
    <Globe size={48} color="#4DABF7" key="globe" />,
    <Code size={48} color="#4C6EF5" key="code" />,
    <Laptop size={48} color="#FA5252" key="laptop" />,
    <Palette size={48} color="#51CF66" key="palette" />,
    <LineChart size={48} color="#12B886" key="chart" />,
    <Zap size={48} color="#FF922B" key="zap" />,
    <Layers size={48} color="#4C6EF5" key="layers" />,
    <Target size={48} color="#FA5252" key="target" />,
    <Upload size={48} color="#BE4BDB" key="upload" />,
    <Smartphone size={48} color="#FD7E14" key="smartphone" />,
    <Database size={48} color="#15AABF" key="database" />,
    <Shield size={48} color="#748FFC" key="shield" />,
  ];

  const titles = [
    "Immersive Websites",
    "Clean Code",
    "Cross-Platform",
    "Beautiful UI/UX",
    "Data Analytics",
    "Fast Development",
    "Scalable Architecture",
    "Precise Targeting",
    "Cloud Integration",
    "Mobile Solutions",
    "Database Management",
    "Security First",
  ];

  const descriptions = [
    "Crafting responsive, interactive websites that captivate users and drive engagement.",
    "Writing maintainable, efficient code that scales with your business needs.",
    "Building solutions that work seamlessly across all devices and platforms.",
    "Designing intuitive, aesthetically pleasing interfaces that users love.",
    "Insightful metrics and analytics to help you make data-driven decisions.",
    "Quick development cycles with continuous delivery and improvement.",
    "Building scalable systems that grow with your business.",
    "Reaching your exact audience with precision marketing tools.",
    "Seamless integration with cloud services and storage.",
    "Native and cross-platform mobile applications.",
    "Efficient data storage and retrieval systems.",
    "Robust security measures to protect your data and users.",
  ];

  const cards = [];

  for (let i = 0; i < count; i++) {
    const index = i % icons.length;
    cards.push(
      <FeatureCard
        key={`card-${i}`}
        icon={icons[index]}
        title={titles[index]}
        description={descriptions[index]}
        background="dark"
      />
    );
  }

  return cards;
};

// Story con grid básico
export const DefaultGrid: Story = {
  args: {
    layout: "grid",
    gap: "md",
    columns: { xs: 1, sm: 2, md: 3, lg: 4 },
    alignment: "stretch",
    title: "Our Services",
    description:
      "Discover our comprehensive range of services tailored to your needs.",
    children: generateDemoCards(8),
  },
};

// Story con layout masonry
export const MasonryLayout: Story = {
  args: {
    layout: "masonry",
    gap: "md",
    title: "Our Services - Masonry Layout",
    description:
      "Cards organized in a masonry layout for a dynamic visual effect.",
    children: generateDemoCards(10),
  },
};

// Story con layout carousel
export const CarouselLayout: Story = {
  args: {
    layout: "carousel",
    gap: "sm",
    title: "Our Services - Carousel",
    description: "Scroll horizontally to see all our services.",
    children: generateDemoCards(8),
  },
};

// Story con layout list
export const ListLayout: Story = {
  args: {
    layout: "list",
    gap: "lg",
    alignment: "center",
    title: "Our Services - List View",
    description: "A simple list of all our services.",
    children: generateDemoCards(4),
  },
};

// Story con diferentes tamaños de gap
export const DifferentGaps: Story = {
  render: () => (
    <div className="space-y-12 max-w-6xl">
      <div>
        <h3 className="text-lg font-medium mb-2">Small Gap (sm)</h3>
        <CardGrid gap="sm" columns={{ xs: 1, sm: 2, md: 2 }}>
          {generateDemoCards(4)}
        </CardGrid>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Medium Gap (md)</h3>
        <CardGrid gap="md" columns={{ xs: 1, sm: 2, md: 2 }}>
          {generateDemoCards(4)}
        </CardGrid>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Large Gap (lg)</h3>
        <CardGrid gap="lg" columns={{ xs: 1, sm: 2, md: 2 }}>
          {generateDemoCards(4)}
        </CardGrid>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Extra Large Gap (xl)</h3>
        <CardGrid gap="xl" columns={{ xs: 1, sm: 2, md: 2 }}>
          {generateDemoCards(4)}
        </CardGrid>
      </div>
    </div>
  ),
};

// Story con diferentes configuraciones de columnas
export const ColumnConfigurations: Story = {
  render: () => (
    <div className="space-y-12 max-w-6xl">
      <div>
        <h3 className="text-lg font-medium mb-2">
          Single Column on Mobile, 2 Columns on Desktop
        </h3>
        <CardGrid columns={{ xs: 1, md: 2 }}>{generateDemoCards(4)}</CardGrid>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">
          2 Columns on Mobile, 3 Columns on Desktop
        </h3>
        <CardGrid columns={{ xs: 2, md: 3 }}>{generateDemoCards(6)}</CardGrid>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">
          Progressive Columns (1-2-3-4-5)
        </h3>
        <CardGrid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
          {generateDemoCards(10)}
        </CardGrid>
      </div>
    </div>
  ),
};

// Story con mezcla de FeatureCards regulares y con emojis
export const MixedCardTypes: Story = {
  render: () => (
    <CardGrid
      title="Mixed Card Types"
      description="A grid combining different types of feature cards."
      columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      gap="lg"
    >
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
      <FeatureCard
        icon="🔒"
        emojiSize={48}
        title="Security Solutions"
        description="Protecting your data and systems from threats."
        background="dark"
      />
      <FeatureCard
        icon={<Shield size={48} color="#748FFC" />}
        title="Secure Development"
        description="Building applications with security in mind from the start."
        background="dark"
      />
      <FeatureCard
        icon="🚀"
        emojiSize={48}
        title="Performance Optimization"
        description="Speeding up your applications for better user experience."
        background="dark"
      />
      <FeatureCard
        icon={<Zap size={48} color="#FF922B" />}
        title="Fast Iterations"
        description="Quick development cycles with continuous improvement."
        background="dark"
      />
    </CardGrid>
  ),
};
