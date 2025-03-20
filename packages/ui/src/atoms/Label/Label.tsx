import React from "react";
import { cn } from "../../utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        className={cn(
          "text-sm font-medium text-black/80 block mb-1",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {required && <span className="text-[#ff4d4d] ml-1">*</span>}
      </label>
    );
  }
);
Label.displayName = "Label";

export { Label };
