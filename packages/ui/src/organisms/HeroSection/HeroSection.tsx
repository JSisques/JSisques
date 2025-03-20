import React from "react";
import { cn } from "../../utils";
import { Button } from "../../atoms/Button";

export type HeroVariant =
  | "classic"
  | "centered"
  | "split"
  | "minimal"
  | "video";
export type HeroTheme = "light" | "dark" | "gradient" | "image";
export type HeroSize = "sm" | "md" | "lg";
export type HeroContentAlignment = "left" | "center" | "right";
export type HeroImagePosition = "left" | "right" | "background";

export interface HeroButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost" | "link";
  isExternal?: boolean;
}

export interface HeroSectionProps {
  /**
   * Variant of hero layout
   */
  variant?: HeroVariant;

  /**
   * Size of the hero section
   */
  size?: HeroSize;

  /**
   * Theme color
   */
  theme?: HeroTheme;

  /**
   * Main title text
   */
  title: string;

  /**
   * Highlight specific words in the title
   */
  highlightWords?: string[];

  /**
   * Subtitle text
   */
  subtitle?: string;

  /**
   * Main description text
   */
  description?: string;

  /**
   * Call to action buttons
   */
  buttons?: HeroButton[];

  /**
   * Image URL or component
   */
  image?: string | React.ReactNode;

  /**
   * Video URL for video variant
   */
  videoUrl?: string;

  /**
   * Video poster image for video variant
   */
  videoPoster?: string;

  /**
   * Video autoplay (muted)
   */
  videoAutoplay?: boolean;

  /**
   * Background image URL
   */
  backgroundImage?: string;

  /**
   * Background overlay color (for image backgrounds)
   */
  backgroundOverlay?: string;

  /**
   * Content alignment
   */
  contentAlignment?: HeroContentAlignment;

  /**
   * Image position (for split variant)
   */
  imagePosition?: HeroImagePosition;

  /**
   * Custom component to display above the title
   */
  preTitle?: React.ReactNode;

  /**
   * Custom component to display below the buttons
   */
  extraContent?: React.ReactNode;

  /**
   * Animate content on view
   */
  animate?: boolean;

  /**
   * Additional classes for the hero section
   */
  className?: string;

  /**
   * Additional classes for the container
   */
  containerClassName?: string;

  /**
   * Additional classes for the content area
   */
  contentClassName?: string;

  /**
   * Additional classes for the media area
   */
  mediaClassName?: string;

  /**
   * Additional classes for the title
   */
  titleClassName?: string;

  /**
   * Additional classes for the subtitle
   */
  subtitleClassName?: string;

  /**
   * Additional classes for the description
   */
  descriptionClassName?: string;

  /**
   * Additional classes for the buttons container
   */
  buttonsClassName?: string;
}

const ThemeStyles = {
  light: {
    bg: "bg-white",
    text: "text-gray-900",
    textSecondary: "text-gray-600",
    highlight: "text-blue-600",
    overlay: "bg-black/20",
  },
  dark: {
    bg: "bg-gray-900",
    text: "text-white",
    textSecondary: "text-gray-300",
    highlight: "text-blue-400",
    overlay: "bg-black/50",
  },
  gradient: {
    bg: "bg-gradient-to-r from-blue-600 to-indigo-800",
    text: "text-white",
    textSecondary: "text-blue-100",
    highlight: "text-yellow-400",
    overlay: "bg-black/10",
  },
  image: {
    bg: "bg-cover bg-center",
    text: "text-white",
    textSecondary: "text-gray-200",
    highlight: "text-yellow-400",
    overlay: "bg-black/40",
  },
};

const SizeStyles = {
  sm: {
    padding: "py-10",
    height: "min-h-[400px]",
    title: "text-3xl md:text-4xl",
    subtitle: "text-xl md:text-2xl",
    description: "text-base",
    spacing: "space-y-4",
  },
  md: {
    padding: "py-16",
    height: "min-h-[500px]",
    title: "text-4xl md:text-5xl",
    subtitle: "text-2xl md:text-3xl",
    description: "text-lg",
    spacing: "space-y-6",
  },
  lg: {
    padding: "py-24",
    height: "min-h-[600px]",
    title: "text-5xl md:text-6xl",
    subtitle: "text-3xl md:text-4xl",
    description: "text-xl",
    spacing: "space-y-8",
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  variant = "classic",
  size = "md",
  theme = "light",
  title,
  highlightWords = [],
  subtitle,
  description,
  buttons = [],
  image,
  videoUrl,
  videoPoster,
  videoAutoplay = false,
  backgroundImage,
  backgroundOverlay,
  contentAlignment = "left",
  imagePosition = "right",
  preTitle,
  extraContent,
  animate = false,
  className,
  containerClassName,
  contentClassName,
  mediaClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  buttonsClassName,
}) => {
  const themeStyle = ThemeStyles[theme];
  const sizeStyle = SizeStyles[size];

  // Helper to highlight specific words in the title
  const renderHighlightedTitle = () => {
    if (!highlightWords.length) return title;

    // Create regex to match any of the highlight words
    const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");

    // Split the title based on the regex
    const parts = title.split(regex);

    return (
      <>
        {parts.map((part, i) => {
          // Check if this part matches any of the highlight words
          const isHighlight = highlightWords.some(
            (word) => part.toLowerCase() === word.toLowerCase()
          );

          return isHighlight ? (
            <span key={i} className={themeStyle.highlight}>
              {part}
            </span>
          ) : (
            part
          );
        })}
      </>
    );
  };

  // Render the media element (image or video)
  const renderMedia = () => {
    if (variant === "video" && videoUrl) {
      return (
        <div
          className={cn("relative overflow-hidden rounded-lg", mediaClassName)}
        >
          <video
            className="w-full h-full object-cover"
            poster={videoPoster}
            autoPlay={videoAutoplay}
            muted={videoAutoplay}
            loop
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    if (image) {
      if (typeof image === "string") {
        return (
          <div
            className={cn(
              "relative overflow-hidden rounded-lg",
              mediaClassName
            )}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        );
      }
      return <div className={cn("relative", mediaClassName)}>{image}</div>;
    }

    return null;
  };

  // Render the action buttons
  const renderButtons = () => {
    if (!buttons.length) return null;

    return (
      <div
        className={cn(
          "flex flex-wrap gap-4 mt-8",
          contentAlignment === "center" ? "justify-center" : "",
          contentAlignment === "right" ? "justify-end" : "",
          buttonsClassName
        )}
      >
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant || "default"}
            onClick={button.onClick}
            className={button.isExternal ? "inline-flex items-center" : ""}
          >
            {button.label}
            {button.isExternal && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </Button>
        ))}
      </div>
    );
  };

  // Get alignment classes
  const getAlignmentClasses = () => {
    switch (contentAlignment) {
      case "center":
        return "text-center mx-auto";
      case "right":
        return "text-right ml-auto";
      default:
        return "text-left";
    }
  };

  // Prepare background styles
  const backgroundStyles: React.CSSProperties = {};
  if (backgroundImage) {
    backgroundStyles.backgroundImage = `url(${backgroundImage})`;
  }

  // Render different hero variants
  const renderHeroContent = () => {
    switch (variant) {
      case "centered":
        return (
          <div
            className={cn("container mx-auto px-4 lg:px-8", containerClassName)}
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center",
                sizeStyle.height,
                sizeStyle.spacing,
                contentClassName
              )}
            >
              {preTitle && <div className="mb-4">{preTitle}</div>}

              <h1
                className={cn(
                  sizeStyle.title,
                  "font-bold leading-tight tracking-tight max-w-4xl text-center",
                  themeStyle.text,
                  titleClassName
                )}
              >
                {renderHighlightedTitle()}
              </h1>

              {subtitle && (
                <h2
                  className={cn(
                    sizeStyle.subtitle,
                    "font-medium mt-4 max-w-3xl text-center",
                    themeStyle.textSecondary,
                    subtitleClassName
                  )}
                >
                  {subtitle}
                </h2>
              )}

              {description && (
                <p
                  className={cn(
                    sizeStyle.description,
                    "mt-6 max-w-2xl text-center",
                    themeStyle.textSecondary,
                    descriptionClassName
                  )}
                >
                  {description}
                </p>
              )}

              {renderButtons()}

              {image && (
                <div className="mt-12 w-full max-w-4xl mx-auto">
                  {renderMedia()}
                </div>
              )}

              {extraContent && (
                <div className="mt-8 w-full max-w-4xl mx-auto">
                  {extraContent}
                </div>
              )}
            </div>
          </div>
        );

      case "split":
        return (
          <div
            className={cn("container mx-auto px-4 lg:px-8", containerClassName)}
          >
            <div
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-12",
                imagePosition === "left" ? "md:flex-row-reverse" : "",
                sizeStyle.height,
                "py-12",
                contentClassName
              )}
            >
              {/* Content side */}
              <div className={cn("w-full md:w-1/2", sizeStyle.spacing)}>
                {preTitle && <div className="mb-4">{preTitle}</div>}

                <h1
                  className={cn(
                    sizeStyle.title,
                    "font-bold leading-tight tracking-tight",
                    themeStyle.text,
                    titleClassName
                  )}
                >
                  {renderHighlightedTitle()}
                </h1>

                {subtitle && (
                  <h2
                    className={cn(
                      sizeStyle.subtitle,
                      "font-medium mt-4",
                      themeStyle.textSecondary,
                      subtitleClassName
                    )}
                  >
                    {subtitle}
                  </h2>
                )}

                {description && (
                  <p
                    className={cn(
                      sizeStyle.description,
                      "mt-6",
                      themeStyle.textSecondary,
                      descriptionClassName
                    )}
                  >
                    {description}
                  </p>
                )}

                {renderButtons()}

                {extraContent && <div className="mt-8">{extraContent}</div>}
              </div>

              {/* Media side */}
              <div className="w-full md:w-1/2">{renderMedia()}</div>
            </div>
          </div>
        );

      case "minimal":
        return (
          <div
            className={cn("container mx-auto px-4 lg:px-8", containerClassName)}
          >
            <div
              className={cn(
                "flex flex-col",
                getAlignmentClasses(),
                sizeStyle.height,
                "py-12 justify-center",
                sizeStyle.spacing,
                contentClassName
              )}
            >
              <h1
                className={cn(
                  sizeStyle.title,
                  "font-bold leading-tight tracking-tight max-w-2xl",
                  contentAlignment === "center" ? "mx-auto" : "",
                  contentAlignment === "right" ? "ml-auto" : "",
                  themeStyle.text,
                  titleClassName
                )}
              >
                {renderHighlightedTitle()}
              </h1>

              {subtitle && (
                <h2
                  className={cn(
                    sizeStyle.subtitle,
                    "font-medium mt-2 max-w-xl",
                    contentAlignment === "center" ? "mx-auto" : "",
                    contentAlignment === "right" ? "ml-auto" : "",
                    themeStyle.textSecondary,
                    subtitleClassName
                  )}
                >
                  {subtitle}
                </h2>
              )}

              {renderButtons()}
            </div>
          </div>
        );

      case "video":
        return (
          <div className="relative">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                poster={videoPoster}
                autoPlay={videoAutoplay}
                muted={videoAutoplay}
                loop
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay */}
              <div
                className={cn(
                  "absolute inset-0",
                  backgroundOverlay || themeStyle.overlay
                )}
              ></div>
            </div>

            {/* Content */}
            <div className={cn("relative z-10", containerClassName)}>
              <div
                className={cn(
                  "container mx-auto px-4 lg:px-8",
                  sizeStyle.height,
                  "flex flex-col justify-center",
                  getAlignmentClasses(),
                  sizeStyle.spacing,
                  contentClassName
                )}
              >
                {preTitle && <div className="mb-4">{preTitle}</div>}

                <h1
                  className={cn(
                    sizeStyle.title,
                    "font-bold leading-tight tracking-tight max-w-4xl",
                    contentAlignment === "center" ? "mx-auto" : "",
                    contentAlignment === "right" ? "ml-auto" : "",
                    themeStyle.text,
                    titleClassName
                  )}
                >
                  {renderHighlightedTitle()}
                </h1>

                {subtitle && (
                  <h2
                    className={cn(
                      sizeStyle.subtitle,
                      "font-medium mt-4 max-w-3xl",
                      contentAlignment === "center" ? "mx-auto" : "",
                      contentAlignment === "right" ? "ml-auto" : "",
                      themeStyle.textSecondary,
                      subtitleClassName
                    )}
                  >
                    {subtitle}
                  </h2>
                )}

                {description && (
                  <p
                    className={cn(
                      sizeStyle.description,
                      "mt-6 max-w-2xl",
                      contentAlignment === "center" ? "mx-auto" : "",
                      contentAlignment === "right" ? "ml-auto" : "",
                      themeStyle.textSecondary,
                      descriptionClassName
                    )}
                  >
                    {description}
                  </p>
                )}

                {renderButtons()}

                {extraContent && (
                  <div
                    className={cn(
                      "mt-8 max-w-2xl",
                      contentAlignment === "center" ? "mx-auto" : "",
                      contentAlignment === "right" ? "ml-auto" : ""
                    )}
                  >
                    {extraContent}
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      // Classic variant (default)
      default:
        return (
          <div
            className={cn("container mx-auto px-4 lg:px-8", containerClassName)}
          >
            <div
              className={cn(
                "flex flex-col",
                sizeStyle.height,
                "py-12 justify-center",
                sizeStyle.spacing,
                contentClassName
              )}
            >
              {preTitle && <div className="mb-4">{preTitle}</div>}

              <h1
                className={cn(
                  sizeStyle.title,
                  "font-bold leading-tight tracking-tight max-w-4xl",
                  themeStyle.text,
                  titleClassName
                )}
              >
                {renderHighlightedTitle()}
              </h1>

              {subtitle && (
                <h2
                  className={cn(
                    sizeStyle.subtitle,
                    "font-medium mt-4 max-w-3xl",
                    themeStyle.textSecondary,
                    subtitleClassName
                  )}
                >
                  {subtitle}
                </h2>
              )}

              {description && (
                <p
                  className={cn(
                    sizeStyle.description,
                    "mt-6 max-w-2xl",
                    themeStyle.textSecondary,
                    descriptionClassName
                  )}
                >
                  {description}
                </p>
              )}

              {renderButtons()}

              {extraContent && <div className="mt-8">{extraContent}</div>}
            </div>
          </div>
        );
    }
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        theme !== "image" ? themeStyle.bg : "",
        sizeStyle.padding,
        className
      )}
      style={backgroundStyles}
    >
      {/* Background overlay for image backgrounds */}
      {(theme === "image" || backgroundImage) && (
        <div
          className={cn(
            "absolute inset-0 z-0",
            backgroundOverlay || themeStyle.overlay
          )}
        ></div>
      )}

      {/* Main content with z-index to appear above the overlay */}
      <div className="relative z-10">{renderHeroContent()}</div>
    </section>
  );
};
