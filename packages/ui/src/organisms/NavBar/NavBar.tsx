import React, { useState, useEffect } from "react";
import { cn } from "../../utils";
import { Button } from "../../atoms/Button";
import { SocialButtonGroup } from "../../molecules/SocialButtonGroup";
import { SocialProfile } from "../../molecules/SocialButtonGroup";

export type NavBarVariant = "simple" | "centered" | "full" | "minimal";
export type NavBarTheme = "light" | "dark" | "colored" | "transparent";
export type NavBarSize = "sm" | "md" | "lg";
export type NavBarPosition = "fixed" | "sticky" | "static";

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
}

export interface ActionButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost" | "link";
  isExternal?: boolean;
}

export interface NavBarProps {
  /**
   * Variant of navbar layout
   */
  variant?: NavBarVariant;

  /**
   * Size of the navbar
   */
  size?: NavBarSize;

  /**
   * Theme color
   */
  theme?: NavBarTheme;

  /**
   * Position style
   */
  position?: NavBarPosition;

  /**
   * Company logo or name
   */
  logo?: React.ReactNode;

  /**
   * Navigation links
   */
  links?: NavLink[];

  /**
   * Action buttons (e.g., "Login", "Sign Up")
   */
  actions?: ActionButton[];

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
   * Enable scroll behavior (background change on scroll)
   */
  scrollBehavior?: boolean;

  /**
   * Custom mobile breakpoint
   */
  mobileBreakpoint?: "sm" | "md" | "lg";

  /**
   * Enable search functionality
   */
  enableSearch?: boolean;

  /**
   * Search placeholder text
   */
  searchPlaceholder?: string;

  /**
   * Search handler
   */
  onSearch?: (query: string) => void;

  /**
   * Additional classes for the navbar
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
   * Additional classes for the actions container
   */
  actionsClassName?: string;

  /**
   * Additional classes for the mobile menu
   */
  mobileMenuClassName?: string;
}

const ThemeStyles = {
  light: {
    bg: "bg-white",
    bgScrolled: "bg-white/90 backdrop-blur-md shadow-sm",
    text: "text-gray-600",
    active: "text-gray-900",
    hover: "hover:text-gray-900",
    border: "border-gray-200",
    mobileMenuBg: "bg-white",
  },
  dark: {
    bg: "bg-gray-900",
    bgScrolled: "bg-gray-900/90 backdrop-blur-md",
    text: "text-gray-300",
    active: "text-white",
    hover: "hover:text-white",
    border: "border-gray-800",
    mobileMenuBg: "bg-gray-900/95",
  },
  colored: {
    bg: "bg-blue-600",
    bgScrolled: "bg-blue-600/90 backdrop-blur-md",
    text: "text-blue-100",
    active: "text-white",
    hover: "hover:text-white",
    border: "border-blue-500",
    mobileMenuBg: "bg-blue-600/95",
  },
  transparent: {
    bg: "bg-transparent",
    bgScrolled: "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm",
    text: "text-gray-600 dark:text-gray-300",
    active: "text-gray-900 dark:text-white",
    hover: "hover:text-gray-900 dark:hover:text-white",
    border: "border-gray-200 dark:border-gray-800",
    mobileMenuBg: "bg-white/95 dark:bg-gray-900/95",
  },
};

const SizeStyles = {
  sm: {
    padding: "py-2",
    text: "text-sm",
    logo: "h-8",
    mobileIcon: "h-5 w-5",
  },
  md: {
    padding: "py-4",
    text: "text-base",
    logo: "h-10",
    mobileIcon: "h-6 w-6",
  },
  lg: {
    padding: "py-6",
    text: "text-lg",
    logo: "h-12",
    mobileIcon: "h-7 w-7",
  },
};

export const NavBar: React.FC<NavBarProps> = ({
  variant = "simple",
  size = "md",
  theme = "light",
  position = "static",
  logo,
  links,
  actions,
  socialLinks,
  scrollBehavior = false,
  mobileBreakpoint = "md",
  enableSearch = false,
  searchPlaceholder = "Search...",
  onSearch,
  className,
  logoClassName,
  linksClassName,
  actionsClassName,
  mobileMenuClassName,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const themeStyle = ThemeStyles[theme];
  const sizeStyle = SizeStyles[size];

  // Handle scroll behavior
  useEffect(() => {
    if (!scrollBehavior) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollBehavior]);

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const navbarBg = scrollBehavior
    ? isScrolled
      ? themeStyle.bgScrolled
      : themeStyle.bg
    : themeStyle.bg;

  const positionClasses = {
    fixed: "fixed top-0 left-0 right-0 z-50",
    sticky: "sticky top-0 z-50",
    static: "relative",
  };

  const breakpointClasses = {
    sm: "sm:hidden",
    md: "md:hidden",
    lg: "lg:hidden",
  };

  const desktopBreakpoint = {
    sm: "sm:flex",
    md: "md:flex",
    lg: "lg:flex",
  };

  const renderLogo = () => {
    if (!logo) return null;

    return <div className={cn("flex items-center", logoClassName)}>{logo}</div>;
  };

  const renderLinks = () => {
    if (!links?.length) return null;

    return (
      <ul className={cn("flex items-center space-x-8", linksClassName)}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={cn(
                "transition-colors duration-200 font-medium",
                themeStyle.text,
                themeStyle.hover,
                link.isActive && themeStyle.active
              )}
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

  const renderActions = () => {
    if (!actions?.length) return null;

    return (
      <div className={cn("flex items-center space-x-4", actionsClassName)}>
        {actions.map((action, index) =>
          action.href ? (
            <Button
              key={index}
              variant={action.variant || "default"}
              size={size === "lg" ? "lg" : size === "sm" ? "sm" : "default"}
              className="whitespace-nowrap"
              onClick={
                action.isExternal
                  ? () => window.open(action.href, "_blank")
                  : action.onClick
              }
            >
              {action.label}
            </Button>
          ) : (
            <Button
              key={index}
              variant={action.variant || "default"}
              size={size === "lg" ? "lg" : size === "sm" ? "sm" : "default"}
              onClick={action.onClick}
              className="whitespace-nowrap"
            >
              {action.label}
            </Button>
          )
        )}
      </div>
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
      <div className="ml-4">
        <SocialButtonGroup
          size="sm"
          profiles={profiles}
          variant={theme === "light" ? "outline" : "ghost"}
        />
      </div>
    );
  };

  const renderSearch = () => {
    if (!enableSearch) return null;

    return (
      <form
        onSubmit={handleSearchSubmit}
        className="hidden md:flex items-center mr-4"
      >
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={cn(
            "px-4 py-2 rounded-md w-[200px] transition focus:outline-none focus:ring-2",
            theme === "dark"
              ? "bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-gray-700"
              : theme === "colored"
                ? "bg-blue-700 text-white placeholder-blue-300 focus:ring-blue-500"
                : "bg-gray-100 text-gray-700 placeholder-gray-400 focus:ring-gray-300"
          )}
        />
        <button
          type="submit"
          className={cn(
            "ml-2 p-2 rounded-md",
            theme === "dark"
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
              : theme === "colored"
                ? "bg-blue-500 text-white hover:bg-blue-400"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          {/* Search icon */}
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
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    );
  };

  const renderMobileMenuButton = () => {
    return (
      <button
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={cn(
          breakpointClasses[mobileBreakpoint],
          "p-2 rounded-md",
          themeStyle.text,
          themeStyle.hover
        )}
      >
        {isMobileMenuOpen ? (
          // X icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={sizeStyle.mobileIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Menu icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={sizeStyle.mobileIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    );
  };

  const renderMobileMenu = () => {
    if (!isMobileMenuOpen) return null;

    return (
      <div
        className={cn(
          "absolute top-full left-0 right-0 shadow-lg border-t z-40",
          themeStyle.mobileMenuBg,
          themeStyle.border,
          breakpointClasses[mobileBreakpoint],
          mobileMenuClassName
        )}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4 divide-y divide-gray-200 dark:divide-gray-700">
          {enableSearch && (
            <div className="pb-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "px-4 py-2 rounded-md w-full transition focus:outline-none focus:ring-2",
                    theme === "dark"
                      ? "bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-gray-700"
                      : theme === "colored"
                        ? "bg-blue-700 text-white placeholder-blue-300 focus:ring-blue-500"
                        : "bg-gray-100 text-gray-700 placeholder-gray-400 focus:ring-gray-300"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "ml-2 p-2 rounded-md",
                    theme === "dark"
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : theme === "colored"
                        ? "bg-blue-500 text-white hover:bg-blue-400"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  )}
                >
                  {/* Search icon */}
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
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          )}

          {links && links.length > 0 && (
            <nav className="py-4">
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={cn(
                        "block py-2 font-medium transition-colors",
                        themeStyle.text,
                        themeStyle.hover,
                        link.isActive && themeStyle.active
                      )}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {actions && actions.length > 0 && (
            <div className="flex flex-col space-y-2 pt-4">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  size={size === "lg" ? "lg" : size === "sm" ? "sm" : "default"}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (action.onClick) action.onClick();
                    if (action.href && action.isExternal) {
                      window.open(action.href, "_blank");
                    } else if (action.href) {
                      window.location.href = action.href;
                    }
                  }}
                  className="w-full"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}

          {socialLinks && (
            <div className="flex justify-center pt-4">{renderSocial()}</div>
          )}
        </div>
      </div>
    );
  };

  // NavBar content based on variant
  const renderNavBarContent = () => {
    switch (variant) {
      case "centered":
        return (
          <>
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 flex justify-start">
                {renderMobileMenuButton()}
              </div>
              <div className="flex-1 flex justify-center">{renderLogo()}</div>
              <div className="flex-1 flex justify-end">
                {enableSearch && (
                  <div className={cn(desktopBreakpoint[mobileBreakpoint])}>
                    {renderSearch()}
                  </div>
                )}
                <div
                  className={cn(desktopBreakpoint[mobileBreakpoint], "hidden")}
                >
                  {renderActions()}
                </div>
              </div>
            </div>
            <div
              className={cn(
                desktopBreakpoint[mobileBreakpoint],
                "hidden mt-4 justify-center"
              )}
            >
              {renderLinks()}
            </div>
            {renderMobileMenu()}
          </>
        );

      case "full":
        return (
          <>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                {renderLogo()}
                <div
                  className={cn(
                    desktopBreakpoint[mobileBreakpoint],
                    "hidden ml-10"
                  )}
                >
                  {renderLinks()}
                </div>
              </div>
              <div className="flex items-center">
                {enableSearch && (
                  <div className={cn(desktopBreakpoint[mobileBreakpoint])}>
                    {renderSearch()}
                  </div>
                )}
                <div
                  className={cn(desktopBreakpoint[mobileBreakpoint], "hidden")}
                >
                  {renderActions()}
                  {renderSocial()}
                </div>
                {renderMobileMenuButton()}
              </div>
            </div>
            {renderMobileMenu()}
          </>
        );

      case "minimal":
        return (
          <>
            <div className="flex justify-between items-center w-full">
              {renderLogo()}
              <div className="flex items-center">
                <div
                  className={cn(
                    desktopBreakpoint[mobileBreakpoint],
                    "hidden mr-4"
                  )}
                >
                  {renderLinks()}
                </div>
                {renderMobileMenuButton()}
              </div>
            </div>
            {renderMobileMenu()}
          </>
        );

      // Simple (default)
      default:
        return (
          <>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center space-x-10">
                {renderLogo()}
                <div
                  className={cn(desktopBreakpoint[mobileBreakpoint], "hidden")}
                >
                  {renderLinks()}
                </div>
              </div>
              <div className="flex items-center">
                {enableSearch && (
                  <div className={cn(desktopBreakpoint[mobileBreakpoint])}>
                    {renderSearch()}
                  </div>
                )}
                <div
                  className={cn(desktopBreakpoint[mobileBreakpoint], "hidden")}
                >
                  {renderActions()}
                </div>
                {renderMobileMenuButton()}
              </div>
            </div>
            {renderMobileMenu()}
          </>
        );
    }
  };

  return (
    <header
      className={cn(
        "transition-all duration-300",
        positionClasses[position],
        navbarBg,
        sizeStyle.padding,
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {renderNavBarContent()}
      </div>
    </header>
  );
};
