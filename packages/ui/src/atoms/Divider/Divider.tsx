import React from "react";
import { cn } from "../../utils";

export interface DividerProps {
  className?: string;
  variant?: "horizontal" | "vertical";
  orientation?: "left" | "center" | "right";
  thickness?: "thin" | "medium" | "thick";
  label?: React.ReactNode;
  color?: string;
  gradient?: boolean;
}

const thicknessClasses = {
  thin: "border-[0.5px]",
  medium: "border-[1px]",
  thick: "border-[2px]",
};

const orientationClasses = {
  left: "w-1/4",
  center: "w-full",
  right: "ml-auto w-1/4",
};

export const Divider: React.FC<DividerProps> = ({
  className,
  variant = "horizontal",
  orientation = "center",
  thickness = "thin",
  label,
  color,
  gradient = false,
}) => {
  const isHorizontal = variant === "horizontal";
  const borderStyle = color ? { borderColor: color } : undefined;

  // Divider with label
  if (label && isHorizontal) {
    return (
      <div className={cn("flex items-center", className)}>
        <div
          className={cn(
            "border-t flex-grow",
            thicknessClasses[thickness],
            gradient && "border-gradient-to-r from-[#ff4d4d] to-[#4d79ff]"
          )}
          style={gradient ? undefined : borderStyle}
        />
        <span className="px-3 text-sm text-black/70">{label}</span>
        <div
          className={cn(
            "border-t flex-grow",
            thicknessClasses[thickness],
            gradient && "border-gradient-to-r from-[#4d79ff] to-[#ff4d4d]"
          )}
          style={gradient ? undefined : borderStyle}
        />
      </div>
    );
  }

  // Regular divider
  if (isHorizontal) {
    return (
      <hr
        className={cn(
          "border-t my-2",
          thicknessClasses[thickness],
          orientationClasses[orientation],
          gradient && "border-gradient-to-r from-[#ff4d4d] to-[#4d79ff]",
          className
        )}
        style={gradient ? undefined : borderStyle}
      />
    );
  }

  // Vertical divider
  return (
    <div
      className={cn(
        "inline-block border-l h-full mx-2 self-stretch",
        thicknessClasses[thickness],
        gradient && "border-gradient-to-b from-[#ff4d4d] to-[#4d79ff]",
        className
      )}
      style={gradient ? undefined : borderStyle}
    />
  );
};
