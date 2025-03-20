import React from "react";
import { cn } from "../../utils";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  /**
   * Value of the option
   */
  value: string;

  /**
   * Label to display
   */
  label: string;

  /**
   * Whether the option is disabled
   */
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  /**
   * Options for the select
   */
  options: SelectOption[];

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Placeholder text
   */
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, error, placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-10 w-full appearance-none rounded-md bg-white/5 border-none text-black px-3 py-2 text-sm",
            "focus:ring-2 focus:ring-[#4d79ff] focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "ring-2 ring-[#ff4d4d]",
            className
          )}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60 pointer-events-none" />
      </div>
    );
  }
);

Select.displayName = "Select";
