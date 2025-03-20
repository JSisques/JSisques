import React from "react";
import { cn } from "../../utils";
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Mail,
  Menu,
  Search,
  Send,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Mapa de iconos disponibles
const icons = {
  alertCircle: AlertCircle,
  arrowRight: ArrowRight,
  check: Check,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  externalLink: ExternalLink,
  mail: Mail,
  menu: Menu,
  search: Search,
  send: Send,
  x: X,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
};

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = 24,
  color,
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent className={cn("", className)} size={size} color={color} />
  );
};
