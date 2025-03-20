import React from "react";
import { cn } from "../../utils";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, error, ...props }, ref) => {
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="radio"
            className={cn(
              "h-4 w-4 border border-black/20 bg-black/5 cursor-pointer",
              "text-[#4d79ff] focus:ring-2 focus:ring-[#4d79ff]/50 focus:outline-none",
              error && "border-[#ff4d4d]",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {(label || description) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={props.id}
                className={cn(
                  "font-medium text-black",
                  props.disabled && "opacity-50"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p
                className={cn(
                  "text-black/70 mt-1",
                  props.disabled && "opacity-50"
                )}
              >
                {description}
              </p>
            )}
            {error && <p className="text-[#ff4d4d] mt-1">{error}</p>}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";
