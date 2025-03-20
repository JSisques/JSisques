import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "../../atoms/Input/Input";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";

const meta: Meta<typeof FormField> = {
  title: "Molecules/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Etiqueta del campo",
    },
    required: {
      control: "boolean",
      description: "Si el campo es obligatorio",
    },
    description: {
      control: "text",
      description: "Texto descriptivo o ayuda",
    },
    error: {
      control: "text",
      description: "Mensaje de error",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
  args: {
    label: "Email",
    required: true,
    description: "We'll never share your email with anyone else.",
    children: <Input type="email" placeholder="Enter your email" />,
  },
};

export const WithTextarea: Story = {
  args: {
    label: "Message",
    description: "Please provide as much detail as possible.",
    children: <Textarea placeholder="Enter your message" />,
  },
};

export const WithCheckbox: Story = {
  args: {
    children: (
      <Checkbox
        label="Subscribe to newsletter"
        description="Receive updates about our products and services."
      />
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    required: true,
    error: "Password must be at least 8 characters long",
    children: <Input type="password" placeholder="Enter your password" />,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 max-w-md">
      <FormField label="Name" required description="Enter your full name">
        <Input placeholder="John Doe" />
      </FormField>

      <FormField
        label="Email"
        required
        error="Please enter a valid email address"
      >
        <Input type="email" placeholder="john@example.com" />
      </FormField>

      <FormField label="Message" description="Your feedback helps us improve">
        <Textarea placeholder="Enter your message here..." />
      </FormField>

      <FormField>
        <Checkbox
          label="I agree to the terms and conditions"
          description="By checking this box, you agree to our Terms of Service and Privacy Policy."
        />
      </FormField>
    </div>
  ),
};
