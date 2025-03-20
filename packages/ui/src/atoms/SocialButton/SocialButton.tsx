import React from "react";
import { cn } from "../../utils";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export type SocialNetwork =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "youtube";

export interface SocialButtonProps {
  /**
   * The social network for the button
   */
  network: SocialNetwork;

  /**
   * The URL to navigate to
   */
  href: string;

  /**
   * Size of the button
   */
  size?: "sm" | "md" | "lg";

  /**
   * Optional additional class names
   */
  className?: string;

  /**
   * Button color variant
   */
  variant?: "default" | "outline" | "ghost";

  /**
   * Optional aria-label for accessibility
   */
  ariaLabel?: string;

  /**
   * Open in new tab
   */
  openInNewTab?: boolean;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  network,
  href,
  size = "md",
  className,
  variant = "default",
  ariaLabel,
  openInNewTab = true,
}) => {
  // Map of social networks to their respective icons
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    facebook: Facebook,
    youtube: Youtube,
  };

  const SocialIcon = socialIcons[network];

  // Size mappings
  const sizeMap = {
    sm: {
      button: "h-8 w-8",
      icon: 16,
    },
    md: {
      button: "h-10 w-10",
      icon: 20,
    },
    lg: {
      button: "h-12 w-12",
      icon: 24,
    },
  };

  // Variant mappings
  const variantStyles = {
    default: "bg-white/10 hover:bg-white/20 text-white",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-700",
    ghost: "hover:bg-gray-100 text-gray-700",
  };

  // Social network colors
  const networkColors = {
    github: "#333",
    linkedin: "#0077B5",
    twitter: "#1DA1F2",
    instagram: "#E1306C",
    facebook: "#1877F2",
    youtube: "#FF0000",
  };

  // Generate the appropriate aria-label if not provided
  const generatedAriaLabel = ariaLabel || `Visit our ${network} page`;

  return (
    <a
      href={href}
      className={cn(
        "flex items-center justify-center rounded-full transition-all duration-200",
        sizeMap[size].button,
        variantStyles[variant],
        className
      )}
      aria-label={generatedAriaLabel}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      style={
        variant === "default"
          ? { backgroundColor: `${networkColors[network]}20` }
          : {}
      }
    >
      <SocialIcon
        size={sizeMap[size].icon}
        className="transition-transform duration-200 group-hover:scale-110"
        color={variant === "default" ? networkColors[network] : undefined}
      />
    </a>
  );
};
