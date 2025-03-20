import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none btn",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff] text-black hover:shadow-lg hover:shadow-[#ff4d4d]/20 hover:scale-105 btn-default",
        outline:
          "border border-black/20 hover:border-black/40 bg-black/10 hover:bg-black/20 text-black hover:shadow-lg hover:shadow-black/10 hover:scale-105 btn-outline",
        ghost:
          "hover:bg-black/5 text-black hover:text-black/90 hover:scale-105 btn-ghost",
        link: "underline-offset-4 hover:underline text-black hover:scale-105 btn-link",
      },
      size: {
        default: "h-10 py-2 px-4 btn-default-size",
        sm: "h-9 py-1 px-3 text-xs btn-sm",
        lg: "h-12 px-8 py-4 text-base btn-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Aplicamos clases de Tailwind y también clases CSS explícitas
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={{
          // Aseguramos que el gradiente se aplique independientemente de Tailwind
          ...(variant === "default" && {
            background: "linear-gradient(to right, #ff4d4d, #4d79ff)",
          }),
        }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
