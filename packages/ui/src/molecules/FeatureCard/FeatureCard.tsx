import React from "react";
import { cn } from "../../utils";

type BackgroundColorType = "dark" | "light" | "transparent";
type BorderRadiusType = "none" | "sm" | "md" | "lg" | "xl" | "full";
type IconPositionType = "left" | "center" | "right";
type HoverEffectType =
  | "none"
  | "lift"
  | "scale"
  | "border"
  | "glow"
  | "rotate"
  | "color-shift"
  | "brightness"
  | "blur-bg"
  | "zoom-icon";

// Mapeo de colores de fondo a clases CSS
const backgroundColorMap: Record<BackgroundColorType, string> = {
  dark: "bg-slate-800 text-white",
  light: "bg-white text-slate-800",
  transparent: "bg-transparent",
};

// Mapeo de tamaños de radio de borde a clases CSS
const borderRadiusMap: Record<BorderRadiusType, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

// Mapeo de posiciones de icono a clases CSS
const iconPositionMap: Record<IconPositionType, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

// Mapeo de efectos hover a clases CSS
const hoverEffectMap: Record<HoverEffectType, string> = {
  none: "",
  lift: "hover:shadow-lg hover:-translate-y-1",
  scale: "hover:scale-105",
  border: "hover:border-2 hover:border-blue-500",
  glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
  rotate: "hover:rotate-1",
  "color-shift": "hover:bg-indigo-700",
  brightness: "hover:brightness-125",
  "blur-bg": "hover:backdrop-blur-sm",
  "zoom-icon": "", // Este efecto se aplica solo al icono
};

export interface FeatureCardProps {
  /**
   * The icon to display
   * Can be a React component (e.g., Lucide icon) or an emoji string
   */
  icon: React.ReactNode;

  /**
   * Size for emoji icons (font size in pixels)
   * Only applies when using an emoji as the icon
   */
  emojiSize?: number;

  /**
   * The title of the feature
   */
  title: string;

  /**
   * The description of the feature
   */
  description: string;

  /**
   * Card background color
   */
  background?: BackgroundColorType;

  /**
   * Border radius size
   */
  borderRadius?: BorderRadiusType;

  /**
   * Type of hover effect to apply
   */
  hoverEffect?: HoverEffectType;

  /**
   * Position of the icon
   */
  iconPosition?: IconPositionType;

  /**
   * Additional class names
   */
  className?: string;

  /**
   * Additional class for the icon
   */
  iconClassName?: string;

  /**
   * Additional class for the title
   */
  titleClassName?: string;

  /**
   * Additional class for the description
   */
  descriptionClassName?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  emojiSize = 40,
  title,
  description,
  background = "dark",
  borderRadius = "lg",
  hoverEffect = "lift",
  iconPosition = "center",
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
}) => {
  // Determinar clases para el contenedor
  const containerClasses = cn(
    "p-6 flex flex-col gap-4 transition-all duration-300",
    backgroundColorMap[background],
    borderRadiusMap[borderRadius],
    hoverEffectMap[hoverEffect],
    className
  );

  // Determinar si el icono es un emoji (string)
  const isEmoji = typeof icon === "string";

  // Determinar clases para el icono
  const iconContainerClasses = cn(
    "flex",
    iconPositionMap[iconPosition],
    hoverEffect === "zoom-icon" &&
      "group-hover:scale-125 transition-transform duration-300",
    iconClassName
  );

  // Determinar clases para el título basado en el fondo
  const titleClasses = cn(
    "text-xl font-bold",
    background === "light" ? "text-slate-800" : "text-white",
    titleClassName
  );

  // Determinar clases para la descripción basado en el fondo
  const descriptionClasses = cn(
    "text-sm",
    background === "light" ? "text-slate-600" : "text-slate-300",
    descriptionClassName
  );

  // Renderizar el icono adecuadamente (emoji o componente)
  const renderedIcon = isEmoji ? (
    <span
      style={{ fontSize: `${emojiSize}px`, lineHeight: 1 }}
      className="leading-none"
      aria-hidden="true"
    >
      {icon}
    </span>
  ) : (
    icon
  );

  return (
    <div className={`group ${containerClasses}`}>
      <div className={iconContainerClasses}>{renderedIcon}</div>
      <div className="space-y-2">
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
      </div>
    </div>
  );
};
