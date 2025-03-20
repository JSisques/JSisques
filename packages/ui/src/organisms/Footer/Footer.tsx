import React from "react";
import { cn } from "../../utils";
import { SocialButtonGroup } from "../../molecules/SocialButtonGroup";
import { SocialProfile } from "../../molecules/SocialButtonGroup";

export type FooterVariant = "simple" | "multi-column" | "centered" | "minimal";
export type FooterTheme = "light" | "dark" | "colored";
export type FooterSize = "sm" | "md" | "lg";

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterColumnProps {
  title?: string;
  links: FooterLink[];
}

export interface FooterProps {
  /**
   * Variant of footer layout
   */
  variant?: FooterVariant;

  /**
   * Size of the footer
   */
  size?: FooterSize;

  /**
   * Theme color
   */
  theme?: FooterTheme;

  /**
   * Company logo or name
   */
  logo?: React.ReactNode;

  /**
   * Company description
   */
  description?: string;

  /**
   * Footer columns with links (for multi-column variant)
   */
  columns?: FooterColumnProps[];

  /**
   * Main navigation links (for simple variant)
   */
  links?: FooterLink[];

  /**
   * Social media links
   */
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
    youtube?: string;
  };

  /**
   * Contact information
   */
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };

  /**
   * Copyright text
   */
  copyright?: string;

  /**
   * Show current year in copyright
   */
  showYear?: boolean;

  /**
   * Additional classes for the footer
   */
  className?: string;

  /**
   * Additional classes for the logo container
   */
  logoClassName?: string;

  /**
   * Additional classes for the links container
   */
  linksClassName?: string;

  /**
   * Additional classes for the social links container
   */
  socialClassName?: string;

  /**
   * Additional classes for the copyright container
   */
  copyrightClassName?: string;

  /**
   * Bottom bar content
   */
  bottomContent?: React.ReactNode;
}

const ThemeStyles = {
  light: {
    bg: "bg-white",
    text: "text-gray-600",
    heading: "text-gray-900",
    divider: "border-gray-200",
    link: "text-gray-500 hover:text-gray-900",
  },
  dark: {
    bg: "bg-gray-900",
    text: "text-gray-400",
    heading: "text-white",
    divider: "border-gray-800",
    link: "text-gray-400 hover:text-white",
  },
  colored: {
    bg: "bg-blue-600",
    text: "text-blue-100",
    heading: "text-white",
    divider: "border-blue-500",
    link: "text-blue-200 hover:text-white",
  },
};

const SizeStyles = {
  sm: {
    padding: "py-4",
    text: "text-sm",
    heading: "text-base",
    spacing: "space-y-3",
  },
  md: {
    padding: "py-8",
    text: "text-base",
    heading: "text-lg",
    spacing: "space-y-4",
  },
  lg: {
    padding: "py-12",
    text: "text-base",
    heading: "text-xl",
    spacing: "space-y-6",
  },
};

export const Footer: React.FC<FooterProps> = ({
  variant = "simple",
  size = "md",
  theme = "light",
  logo,
  description,
  columns,
  links,
  socialLinks,
  contactInfo,
  copyright = "All rights reserved.",
  showYear = true,
  className,
  logoClassName,
  linksClassName,
  socialClassName,
  copyrightClassName,
  bottomContent,
}) => {
  const themeStyle = ThemeStyles[theme];
  const sizeStyle = SizeStyles[size];

  // Generate copyright text with current year if needed
  const copyrightText = showYear
    ? `© ${new Date().getFullYear()} ${copyright}`
    : `© ${copyright}`;

  const renderLogo = () => {
    if (!logo) return null;

    return <div className={cn("flex items-center", logoClassName)}>{logo}</div>;
  };

  const renderLinks = (
    footerLinks: FooterLink[],
    horizontal: boolean = false
  ) => {
    if (!footerLinks?.length) return null;

    return (
      <ul
        className={cn(
          horizontal ? "flex flex-wrap gap-x-6 gap-y-2" : "space-y-2",
          linksClassName
        )}
      >
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={cn(themeStyle.link, "transition-colors duration-200")}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderSocial = () => {
    if (!socialLinks) return null;

    // Convert socialLinks object to array of SocialProfile objects
    const profiles: SocialProfile[] = [];

    if (socialLinks.twitter) {
      profiles.push({ network: "twitter", url: socialLinks.twitter });
    }
    if (socialLinks.facebook) {
      profiles.push({ network: "facebook", url: socialLinks.facebook });
    }
    if (socialLinks.instagram) {
      profiles.push({ network: "instagram", url: socialLinks.instagram });
    }
    if (socialLinks.github) {
      profiles.push({ network: "github", url: socialLinks.github });
    }
    if (socialLinks.linkedin) {
      profiles.push({ network: "linkedin", url: socialLinks.linkedin });
    }
    if (socialLinks.youtube) {
      profiles.push({ network: "youtube", url: socialLinks.youtube });
    }

    if (profiles.length === 0) return null;

    return (
      <div className={cn(variant !== "minimal" ? "mt-4" : "", socialClassName)}>
        <SocialButtonGroup
          size="sm"
          profiles={profiles}
          variant={theme === "light" ? "outline" : "ghost"}
        />
      </div>
    );
  };

  const renderContact = () => {
    if (!contactInfo) return null;

    return (
      <div className={cn("space-y-2", themeStyle.text, sizeStyle.text)}>
        {contactInfo.email && (
          <div className="flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <a href={`mailto:${contactInfo.email}`} className={themeStyle.link}>
              {contactInfo.email}
            </a>
          </div>
        )}

        {contactInfo.phone && (
          <div className="flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <a href={`tel:${contactInfo.phone}`} className={themeStyle.link}>
              {contactInfo.phone}
            </a>
          </div>
        )}

        {contactInfo.address && (
          <div className="flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span className={themeStyle.text}>{contactInfo.address}</span>
          </div>
        )}
      </div>
    );
  };

  const renderCopyright = () => {
    return (
      <div
        className={cn(
          "text-center pt-4 mt-4 border-t",
          themeStyle.text,
          themeStyle.divider,
          sizeStyle.text,
          copyrightClassName
        )}
      >
        {copyrightText}
      </div>
    );
  };

  // Render different footer variants
  const renderFooterContent = () => {
    switch (variant) {
      case "multi-column":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className={cn(sizeStyle.spacing)}>
                {renderLogo()}
                {description && (
                  <p className={cn("mt-4", themeStyle.text, sizeStyle.text)}>
                    {description}
                  </p>
                )}
                {renderSocial()}
              </div>

              {columns?.map((column, index) => (
                <div key={index} className={cn(sizeStyle.spacing)}>
                  {column.title && (
                    <h3
                      className={cn(
                        "font-medium mb-3",
                        themeStyle.heading,
                        sizeStyle.heading
                      )}
                    >
                      {column.title}
                    </h3>
                  )}
                  {renderLinks(column.links)}
                </div>
              ))}

              {contactInfo && (
                <div className={cn(sizeStyle.spacing)}>
                  <h3
                    className={cn(
                      "font-medium mb-3",
                      themeStyle.heading,
                      sizeStyle.heading
                    )}
                  >
                    Contact Us
                  </h3>
                  {renderContact()}
                </div>
              )}
            </div>
            {renderCopyright()}
          </>
        );

      case "centered":
        return (
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center">{renderLogo()}</div>

            {description && (
              <p className={cn("mt-4", themeStyle.text, sizeStyle.text)}>
                {description}
              </p>
            )}

            {links && (
              <div className="mt-6 flex justify-center">
                {renderLinks(links, true)}
              </div>
            )}

            {socialLinks && (
              <div className="mt-6 flex justify-center">{renderSocial()}</div>
            )}

            {renderCopyright()}
          </div>
        );

      case "minimal":
        return (
          <>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">{renderLogo()}</div>

              {links && (
                <div className="flex justify-center mb-4 md:mb-0">
                  {renderLinks(links, true)}
                </div>
              )}

              <div className="mb-4 md:mb-0">{renderSocial()}</div>
            </div>
            <div
              className={cn(
                "text-center pt-4 mt-4 border-t",
                themeStyle.text,
                themeStyle.divider,
                sizeStyle.text,
                copyrightClassName
              )}
            >
              {copyrightText}
            </div>
          </>
        );

      // Simple variant (default)
      default:
        return (
          <>
            <div className="flex flex-col md:flex-row justify-between">
              <div className={cn(sizeStyle.spacing, "md:max-w-md")}>
                {renderLogo()}
                {description && (
                  <p className={cn("mt-4", themeStyle.text, sizeStyle.text)}>
                    {description}
                  </p>
                )}
                {renderSocial()}
              </div>

              <div className="mt-8 md:mt-0 flex flex-wrap gap-8">
                {contactInfo && (
                  <div className={cn(sizeStyle.spacing)}>
                    <h3
                      className={cn(
                        "font-medium mb-3",
                        themeStyle.heading,
                        sizeStyle.heading
                      )}
                    >
                      Contact Us
                    </h3>
                    {renderContact()}
                  </div>
                )}

                {links && (
                  <div className={cn(sizeStyle.spacing)}>
                    <h3
                      className={cn(
                        "font-medium mb-3",
                        themeStyle.heading,
                        sizeStyle.heading
                      )}
                    >
                      Links
                    </h3>
                    {renderLinks(links)}
                  </div>
                )}
              </div>
            </div>
            {renderCopyright()}
          </>
        );
    }
  };

  return (
    <footer
      className={cn("relative", themeStyle.bg, sizeStyle.padding, className)}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {renderFooterContent()}
        {bottomContent && <div className="mt-4">{bottomContent}</div>}
      </div>
    </footer>
  );
};
