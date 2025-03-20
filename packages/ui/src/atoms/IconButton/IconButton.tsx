import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils";

export interface IconButtonProps {
  className?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors cursor-pointer hover:bg-white/20",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export { IconButton };
