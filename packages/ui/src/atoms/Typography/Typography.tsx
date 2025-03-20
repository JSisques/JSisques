import React from "react";
import { cn } from "../../utils";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline";

export type TypographyAlign = "left" | "center" | "right";

export interface TypographyProps {
  variant?: TypographyVariant;
  component?: React.ElementType;
  align?: TypographyAlign;
  className?: string;
  children: React.ReactNode;
  gutterBottom?: boolean;
  gradient?: boolean;
}

const variantMapping: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
};

const variantStyles: Record<TypographyVariant, string> = {
  h1: "text-4xl md:text-6xl lg:text-7xl font-bold",
  h2: "text-3xl md:text-5xl font-bold",
  h3: "text-2xl md:text-3xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  subtitle1: "text-lg font-medium",
  subtitle2: "text-base font-medium",
  body1: "text-base",
  body2: "text-sm",
  caption: "text-xs",
  overline: "text-xs uppercase tracking-wider",
};

const alignStyles: Record<TypographyAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  component,
  align = "left",
  className,
  children,
  gutterBottom = false,
  gradient = false,
  ...rest
}) => {
  const Component = component || variantMapping[variant];

  return (
    <Component
      className={cn(
        variantStyles[variant],
        alignStyles[align],
        gutterBottom && "mb-4",
        gradient &&
          "text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff]",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
