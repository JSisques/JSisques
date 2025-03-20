# UI Component Library

A library of reusable UI components built with React, TypeScript, and TailwindCSS.
This library follows the Atomic Design methodology.

## Components

Components are organized into the following categories:

- **Atoms**: The smallest building blocks (Button, Input, Textarea, IconButton)
- **Molecules**: Groups of atoms that work together (Logo, NavLink, ServiceCard, etc.)
- **Organisms**: Groups of molecules that form a relatively complex section (Header, HeroSection, ServiceSection)
- **Templates**: Page layouts that arrange organisms (will be added as needed)

## Getting Started

### Installation

```bash
npm install
```

### Running Storybook

```bash
npm run storybook
```

This will start Storybook at http://localhost:6006

### Building Storybook

```bash
npm run build-storybook
```

## Usage

To use components in your project:

```jsx
import { Button, Logo, Header } from "@repo/ui";
```

## Documentation

Component documentation is available in Storybook.
