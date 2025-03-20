import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { FormField } from "../../molecules/FormField/FormField";
import { Input } from "../../atoms/Input/Input";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Select } from "../../atoms/Select/Select";
import { Radio } from "../../atoms/Radio/Radio";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";

const meta: Meta<typeof Form> = {
  title: "Organisms/Form",
  component: Form,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
  argTypes: {
    submitText: {
      control: "text",
      description: "Texto del botón de envío",
    },
    cancelText: {
      control: "text",
      description: "Texto del botón de cancelar",
    },
    isSubmitting: {
      control: "boolean",
      description: "Estado de carga del formulario",
    },
    buttonPosition: {
      control: "radio",
      options: ["left", "center", "right"],
      description: "Posición de los botones",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

// Story básica con un formulario de contacto
export const ContactForm: Story = {
  args: {
    submitText: "Send Message",
    cancelText: "Clear Form",
    buttonPosition: "right",
    onSubmit: (e) => e.preventDefault(),
    onCancel: () => console.log("Form canceled"),
    children: (
      <>
        <FormField label="Name" required>
          <Input placeholder="John Doe" />
        </FormField>
        <FormField label="Email" required>
          <Input type="email" placeholder="john@example.com" />
        </FormField>
        <FormField label="Message" required>
          <Textarea placeholder="Type your message here..." />
        </FormField>
      </>
    ),
  },
};

// Story con un formulario de registro
export const SignupForm: Story = {
  args: {
    submitText: "Create Account",
    buttonPosition: "center",
    onSubmit: (e) => e.preventDefault(),
    children: (
      <>
        <FormField label="Full Name" required>
          <Input placeholder="John Doe" />
        </FormField>
        <FormField label="Email" required>
          <Input type="email" placeholder="john@example.com" />
        </FormField>
        <FormField label="Password" required>
          <Input type="password" placeholder="Create a password" />
        </FormField>
        <FormField label="Confirm Password" required>
          <Input type="password" placeholder="Confirm your password" />
        </FormField>
        <FormField>
          <Checkbox
            label="I agree to the Terms of Service and Privacy Policy"
            required
          />
        </FormField>
      </>
    ),
  },
};

// Story con un formulario más complejo de checkout
export const CheckoutForm: Story = {
  render: () => {
    const countryOptions = [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "br", label: "Brazil" },
    ];

    return (
      <div className="max-w-xl w-full mx-auto">
        <Form
          submitText="Complete Purchase"
          buttonPosition="right"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-lg font-medium mb-4">Shipping Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="First Name" required>
              <Input placeholder="John" />
            </FormField>

            <FormField label="Last Name" required>
              <Input placeholder="Doe" />
            </FormField>
          </div>

          <FormField label="Email" required>
            <Input type="email" placeholder="john@example.com" />
          </FormField>

          <FormField label="Address" required>
            <Input placeholder="123 Main St" />
          </FormField>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="City" required>
              <Input placeholder="New York" />
            </FormField>

            <FormField label="State/Province" required>
              <Input placeholder="NY" />
            </FormField>

            <FormField label="Zip/Postal Code" required>
              <Input placeholder="10001" />
            </FormField>
          </div>

          <FormField label="Country" required>
            <Select
              options={countryOptions}
              placeholder="Select your country"
            />
          </FormField>

          <h3 className="text-lg font-medium mt-6 mb-4">Payment Method</h3>

          <div className="space-y-3">
            <Radio
              name="payment"
              value="credit"
              label="Credit Card"
              defaultChecked
            />
            <Radio name="payment" value="paypal" label="PayPal" />
            <Radio name="payment" value="bank" label="Bank Transfer" />
          </div>

          <FormField>
            <Checkbox label="Save this information for future purchases" />
          </FormField>
        </Form>
      </div>
    );
  },
};

// Story con un formulario en estado de carga
export const SubmittingForm: Story = {
  args: {
    submitText: "Save Changes",
    cancelText: "Cancel",
    isSubmitting: true,
    buttonPosition: "left",
    onSubmit: (e) => e.preventDefault(),
    onCancel: () => console.log("Canceled"),
    children: (
      <>
        <FormField label="Title" required>
          <Input placeholder="Enter title" />
        </FormField>
        <FormField label="Description">
          <Textarea placeholder="Enter description" />
        </FormField>
      </>
    ),
  },
};

// Story con diferentes posiciones de botones
export const ButtonPositions: Story = {
  render: () => (
    <div className="space-y-12 max-w-xl">
      <div>
        <h3 className="text-lg font-medium mb-2">
          Left-aligned Buttons (Default)
        </h3>
        <Form
          submitText="Submit"
          cancelText="Cancel"
          buttonPosition="left"
          onCancel={() => {}}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormField label="Name">
            <Input placeholder="Your name" />
          </FormField>
        </Form>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Center-aligned Buttons</h3>
        <Form
          submitText="Submit"
          cancelText="Cancel"
          buttonPosition="center"
          onCancel={() => {}}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormField label="Name">
            <Input placeholder="Your name" />
          </FormField>
        </Form>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Right-aligned Buttons</h3>
        <Form
          submitText="Submit"
          cancelText="Cancel"
          buttonPosition="right"
          onCancel={() => {}}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormField label="Name">
            <Input placeholder="Your name" />
          </FormField>
        </Form>
      </div>
    </div>
  ),
};
