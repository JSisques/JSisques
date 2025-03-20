import React from "react";
import { cn } from "../../utils";
import { Label } from "../../atoms/Label/Label";

export interface FormFieldProps {
  /**
   * ID for the form field
   */
  id?: string;

  /**
   * Label for the form field
   */
  label?: string;

  /**
   * Whether the field is required
   */
  required?: boolean;

  /**
   * Description or hint text
   */
  description?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * The form field component (input, textarea, etc.)
   */
  children: React.ReactNode;

  /**
   * Additional className for the container
   */
  className?: string;

  /**
   * Additional className for the label
   */
  labelClassName?: string;

  /**
   * Additional className for the description
   */
  descriptionClassName?: string;

  /**
   * Additional className for the error message
   */
  errorClassName?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required = false,
  description,
  error,
  children,
  className,
  labelClassName,
  descriptionClassName,
  errorClassName,
}) => {
  // Generate a unique ID if none provided
  const fieldId = id || `field-${Math.random().toString(36).substring(2, 11)}`;

  // Clone the child element to pass the id prop
  const childElement = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        id: fieldId,
        "aria-describedby": description ? `${fieldId}-description` : undefined,
        "aria-invalid": error ? "true" : undefined,
        ...child.props,
      });
    }
    return child;
  });

  return (
    <div className={cn("mb-4", className)}>
      {label && (
        <Label htmlFor={fieldId} required={required} className={labelClassName}>
          {label}
        </Label>
      )}

      {childElement}

      {description && !error && (
        <p
          id={`${fieldId}-description`}
          className={cn("mt-1 text-sm text-black/60", descriptionClassName)}
        >
          {description}
        </p>
      )}

      {error && (
        <p
          id={`${fieldId}-error`}
          className={cn("mt-1 text-sm text-[#ff4d4d]", errorClassName)}
        >
          {error}
        </p>
      )}
    </div>
  );
};
