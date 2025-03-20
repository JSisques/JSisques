import React from "react";
import { cn } from "../../utils";
import { SocialButton, SocialNetwork } from "../../atoms/SocialButton";

export interface SocialProfile {
  /**
   * The social network
   */
  network: SocialNetwork;

  /**
   * URL to the profile
   */
  url: string;
}

export interface SocialButtonGroupProps {
  /**
   * Array of social profiles to display
   */
  profiles: SocialProfile[];

  /**
   * Size of the buttons
   */
  size?: "sm" | "md" | "lg";

  /**
   * Variant style for the buttons
   */
  variant?: "default" | "outline" | "ghost";

  /**
   * Direction of the button group
   */
  direction?: "horizontal" | "vertical";

  /**
   * Gap between buttons
   */
  gap?: "xs" | "sm" | "md" | "lg";

  /**
   * Open links in new tab
   */
  openInNewTab?: boolean;

  /**
   * Additional class name
   */
  className?: string;
}

export const SocialButtonGroup: React.FC<SocialButtonGroupProps> = ({
  profiles,
  size = "md",
  variant = "default",
  direction = "horizontal",
  gap = "md",
  openInNewTab = true,
  className,
}) => {
  // Map gap sizes to actual spacing
  const gapMap = {
    xs: "gap-2",
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
  };

  // Generate container classes
  const containerClasses = cn(
    "flex",
    direction === "horizontal" ? "flex-row" : "flex-col",
    gapMap[gap],
    className
  );

  // Filter out undefined or null profiles
  const validProfiles = profiles.filter(
    (profile): profile is SocialProfile =>
      !!profile && !!profile.network && !!profile.url
  );

  return (
    <div className={containerClasses}>
      {validProfiles.map((profile, index) => (
        <SocialButton
          key={`${profile.network}-${index}`}
          network={profile.network}
          href={profile.url}
          size={size}
          variant={variant}
          openInNewTab={openInNewTab}
          ariaLabel={`Visit our ${profile.network} profile`}
        />
      ))}
    </div>
  );
};
