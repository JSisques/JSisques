import React from "react";
import { Check } from "lucide-react";
import { cn } from "../../utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, ...props }, ref) => {
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <span className="relative flex items-center justify-center">
            <input
              type="checkbox"
              className={cn(
                "appearance-none h-4 w-4 rounded border border-black/20 bg-black/5 cursor-pointer transition-colors",
                "focus:ring-2 focus:ring-[#4d79ff]/50 focus:outline-none checked:bg-gradient-to-r checked:from-[#ff4d4d] checked:to-[#4d79ff]",
                error && "border-[#ff4d4d]",
                className
              )}
              ref={ref}
              {...props}
            />
            <Check
              className={cn(
                "absolute text-black h-3 w-3 opacity-0 transition-opacity pointer-events-none",
                props.checked ? "opacity-100" : "opacity-0"
              )}
            />
          </span>
        </div>
        {(label || description) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={props.id}
                className={cn(
                  "font-medium text-black",
                  props.disabled && "opacity-50",
                  className
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

Checkbox.displayName = "Checkbox";
