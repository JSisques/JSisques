import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconName } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [
        "alertCircle",
        "arrowRight",
        "check",
        "chevronDown",
        "chevronUp",
        "externalLink",
        "mail",
        "menu",
        "search",
        "send",
        "x",
      ],
      description: "Nombre del icono",
    },
    size: {
      control: { type: "range", min: 12, max: 64, step: 4 },
      description: "Tamaño del icono en píxeles",
    },
    color: {
      control: "color",
      description: "Color del icono",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "arrowRight",
    size: 24,
  },
};

export const Colored: Story = {
  args: {
    name: "alertCircle",
    size: 32,
    color: "#ff4d4d",
  },
};

export const IconSet: Story = {
  render: () => {
    const iconNames: IconName[] = [
      "alertCircle",
      "arrowRight",
      "check",
      "chevronDown",
      "chevronUp",
      "externalLink",
      "mail",
      "menu",
      "search",
      "send",
      "x",
      "chevronLeft",
      "chevronRight",
    ];

    return (
      <div className="grid grid-cols-3 gap-4">
        {iconNames.map((name) => (
          <div
            key={name}
            className="flex flex-col items-center p-4 border border-gray-200 rounded"
          >
            <Icon name={name} size={24} color="#333" />
            <span className="mt-2 text-xs text-gray-600">{name}</span>
          </div>
        ))}
      </div>
    );
  },
};
