import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto de placeholder",
    },
    disabled: {
      control: "boolean",
      description: "Estado deshabilitado",
    },
    error: {
      control: "boolean",
      description: "Estado de error",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Opciones de ejemplo para todos los stories
const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "br", label: "Brazil" },
  { value: "ar", label: "Argentina" },
  { value: "co", label: "Colombia" },
  { value: "pe", label: "Peru" },
  { value: "es", label: "Spain" },
  { value: "pt", label: "Portugal" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "it", label: "Italy" },
];

export const Default: Story = {
  args: {
    options: countryOptions,
  },
};

export const WithPlaceholder: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
  },
};

export const Disabled: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
    error: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico", disabled: true },
      { value: "br", label: "Brazil" },
      { value: "ar", label: "Argentina", disabled: true },
    ],
    placeholder: "Select a country",
  },
};

export const PreSelected: Story = {
  args: {
    options: countryOptions,
    defaultValue: "fr",
  },
};
