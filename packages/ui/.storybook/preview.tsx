import React from "react";
import type { Preview } from "@storybook/react";
import "../src/globals.css";

// Polyfill for Next.js process.env in Storybook
if (typeof window !== "undefined") {
  // @ts-ignore - Ignorar errores de tipo ya que esto es solo para Storybook
  window.process = {
    env: {
      NODE_ENV: "development",
      // @ts-ignore - Necesario para Next.js Image
      __NEXT_IMAGE_OPTS: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/",
        loader: "default",
        domains: [],
        disableStaticImages: false,
        minimumCacheTTL: 60,
        formats: ["image/webp"],
      },
    },
  };
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "dark",
          value: "#0e0e10",
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(Story) => <Story />],
};

export default preview;
