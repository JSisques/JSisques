import React from "react";
import { cn } from "../../utils";
import { Button } from "../../atoms/Button";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * Form content
   */
  children: React.ReactNode;

  /**
   * Text for the submit button
   */
  submitText?: string;

  /**
   * Text for the cancel button
   */
  cancelText?: string;

  /**
   * Handler for cancel button
   */
  onCancel?: () => void;

  /**
   * Loading state for submit button
   */
  isSubmitting?: boolean;

  /**
   * Position of the form buttons
   */
  buttonPosition?: "left" | "center" | "right";

  /**
   * Additional classes for the form container
   */
  className?: string;

  /**
   * Additional classes for the action buttons container
   */
  actionsClassName?: string;

  /**
   * Additional classes for the submit button
   */
  submitClassName?: string;

  /**
   * Additional classes for the cancel button
   */
  cancelClassName?: string;
}

export const Form: React.FC<FormProps> = ({
  children,
  submitText = "Submit",
  cancelText = "Cancel",
  onCancel,
  isSubmitting = false,
  buttonPosition = "left",
  className,
  actionsClassName,
  submitClassName,
  cancelClassName,
  ...props
}) => {
  // Map position to justify content
  const positionMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <form className={cn("space-y-6", className)} {...props}>
      <div className="space-y-4">{children}</div>

      <div
        className={cn(
          "flex flex-wrap gap-4 pt-2",
          positionMap[buttonPosition],
          actionsClassName
        )}
      >
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className={cancelClassName}
          >
            {cancelText}
          </Button>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className={submitClassName}
        >
          {isSubmitting ? "Processing..." : submitText}
        </Button>
      </div>
    </form>
  );
};
