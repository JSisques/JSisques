import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import { cn } from "../../utils";
import { NextImageMock } from "./MockNextImage";

// Check if we're running in a browser environment (i.e., Storybook)
const isClient = typeof window !== "undefined";
// Use mock in Storybook, real component in Next.js
const ImageComponent = isClient ? NextImageMock : NextImage;

export type ImageSize = "xs" | "sm" | "md" | "lg" | "xl" | "full" | "custom";
export type ImageShape = "square" | "rounded" | "circle";
export type ImageFit = "cover" | "contain" | "fill" | "none";
export type ImagePosition = "center" | "top" | "bottom" | "left" | "right";
export type ImageLoading = "lazy" | "eager";
export type HoverEffect =
  | "none"
  | "zoom"
  | "rotate"
  | "brightUp"
  | "fadeIn"
  | "glow"
  | "flipHorizontal"
  | "flipVertical"
  | "scale"
  | "tilt";
export type FilterEffect =
  | "none"
  | "grayscale"
  | "blur"
  | "sepia"
  | "saturate"
  | "invert"
  | "brightness"
  | "contrast"
  | "hueRotate"
  | "duotone";

export interface ImageProps {
  /**
   * Source URL of the image
   */
  src: string;

  /**
   * Alternative text for the image - important for SEO and accessibility
   */
  alt: string;

  /**
   * Size of the image
   */
  size?: ImageSize;

  /**
   * Custom width in pixels (when size is "custom")
   */
  width?: number | string;

  /**
   * Custom height in pixels (when size is "custom")
   */
  height?: number | string;

  /**
   * Shape of the image container
   */
  shape?: ImageShape;

  /**
   * How the image should be fitted within its container
   */
  objectFit?: ImageFit;

  /**
   * Position of the image within its container
   */
  objectPosition?: ImagePosition;

  /**
   * Loading strategy (lazy for performance, eager for above-the-fold images)
   */
  loading?: ImageLoading;

  /**
   * Priority loading for LCP (Largest Contentful Paint) images
   */
  priority?: boolean;

  /**
   * Enable blur-up effect with a placeholder
   */
  blurEffect?: boolean;

  /**
   * Optional blurDataURL - Base64 encoded image placeholder
   */
  blurDataURL?: string;

  /**
   * Enable image shadow
   */
  shadow?: boolean;

  /**
   * Apply hover effect (zoom, rotate, brightUp, fadeIn, glow, etc.)
   */
  hoverEffect?: HoverEffect;

  /**
   * Intensity of the hover effect (1-5)
   */
  hoverIntensity?: 1 | 2 | 3 | 4 | 5;

  /**
   * Apply filter effects
   */
  filterEffect?: FilterEffect;

  /**
   * Intensity of the filter (0-100)
   */
  filterIntensity?: number;

  /**
   * Custom class name
   */
  className?: string;

  /**
   * Callback function when image is clicked
   */
  onClick?: () => void;

  /**
   * Optional caption to display below the image
   */
  caption?: string;

  /**
   * Specify which image sizes to use for responsive images
   */
  sizes?: string;

  /**
   * Quality of the optimized image (1-100)
   */
  quality?: number;

  /**
   * Apply border to image
   */
  border?: boolean;

  /**
   * Border color for the image
   */
  borderColor?: string;

  /**
   * Enable overlay on hover
   */
  hoverOverlay?: boolean;

  /**
   * Overlay color (with transparency)
   */
  overlayColor?: string;

  /**
   * Rest of the properties allowed in an HTML image
   */
  [key: string]: any;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  size = "md",
  width,
  height,
  shape = "square",
  objectFit = "cover",
  objectPosition = "center",
  loading = "lazy",
  priority = false,
  blurEffect = false,
  blurDataURL,
  shadow = false,
  hoverEffect = "none",
  hoverIntensity = 3,
  filterEffect = "none",
  filterIntensity = 100,
  className,
  onClick,
  caption,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 80,
  border = false,
  borderColor = "rgba(0,0,0,0.2)",
  hoverOverlay = false,
  overlayColor = "rgba(0,0,0,0.3)",
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [blurData, setBlurData] = useState<string | null>(null);

  // Size mappings
  const sizeMap = {
    xs: { width: 100, height: 100 },
    sm: { width: 200, height: 200 },
    md: { width: 300, height: 300 },
    lg: { width: 400, height: 400 },
    xl: { width: 500, height: 500 },
    full: { width: 1920, height: 1080 },
    custom: {
      width: typeof width === "number" ? width : 300,
      height: typeof height === "number" ? height : 300,
    },
  };

  // Shape mappings
  const shapeMap = {
    square: "",
    rounded: "rounded-lg",
    circle: "rounded-full",
  };

  // Object fit mappings
  const fitMap = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
  };

  // Object position mappings
  const positionMap = {
    center: "object-center",
    top: "object-top",
    bottom: "object-bottom",
    left: "object-left",
    right: "object-right",
  };

  // Hover effect mappings
  const hoverEffectMap = {
    none: () => "",
    zoom: (intensity: number) =>
      `hover:scale-${100 + intensity * 5} transition-transform duration-300`,
    rotate: (intensity: number) =>
      `hover:rotate-${intensity * 2} transition-transform duration-300`,
    brightUp: (intensity: number) =>
      `hover:brightness-${100 + intensity * 10} transition-all duration-300`,
    fadeIn: () =>
      "opacity-90 hover:opacity-100 transition-opacity duration-300",
    glow: (intensity: number) =>
      `hover:shadow-glow-${intensity} transition-shadow duration-300`,
    flipHorizontal: () =>
      "hover:scale-x-[-1] transition-transform duration-500",
    flipVertical: () => "hover:scale-y-[-1] transition-transform duration-500",
    scale: (intensity: number) =>
      `hover:scale-${100 + intensity * 2} transition-transform duration-300`,
    tilt: (intensity: number) =>
      `hover:rotate-${intensity} hover:-translate-y-${
        intensity / 2
      } transition-all duration-300`,
  };

  // Process filter effects
  const getFilterStyle = () => {
    if (filterEffect === "none") return {};

    let filterValue = "";

    switch (filterEffect) {
      case "grayscale":
        filterValue = `grayscale(${filterIntensity}%)`;
        break;
      case "blur":
        filterValue = `blur(${Math.min(10, filterIntensity / 10)}px)`;
        break;
      case "sepia":
        filterValue = `sepia(${filterIntensity}%)`;
        break;
      case "saturate":
        filterValue = `saturate(${filterIntensity}%)`;
        break;
      case "invert":
        filterValue = `invert(${filterIntensity}%)`;
        break;
      case "brightness":
        filterValue = `brightness(${filterIntensity}%)`;
        break;
      case "contrast":
        filterValue = `contrast(${filterIntensity}%)`;
        break;
      case "hueRotate":
        filterValue = `hue-rotate(${filterIntensity * 3.6}deg)`;
        break;
      case "duotone":
        filterValue = `grayscale(100%) sepia(20%) brightness(90%) hue-rotate(180deg)`;
        break;
      default:
        break;
    }

    return { filter: filterValue };
  };

  // Generate class names
  const containerClasses = cn(
    "relative overflow-hidden transition-transform duration-300",
    shapeMap[shape],
    {
      "shadow-lg": shadow,
      "cursor-pointer": !!onClick,
      "border-2": border,
      "hover:border-opacity-100": border,
      group: hoverEffect !== "none" || hoverOverlay,
    },
    hoverEffect !== "none" && hoverEffectMap[hoverEffect]
      ? hoverEffectMap[hoverEffect](hoverIntensity)
      : "",
    className
  );

  // Handle image loading error
  const handleError = () => {
    setIsError(true);
  };

  // Handle image loaded successfully
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Placeholder shown when loading or on error
  const renderPlaceholder = () => {
    if (isLoaded && !isError) return null;

    const placeholderClass = cn(
      "absolute inset-0 flex items-center justify-center bg-gray-200",
      isError ? "text-red-500" : "text-gray-400"
    );

    return (
      <div className={placeholderClass}>
        {isError ? "Error loading image" : "Loading..."}
      </div>
    );
  };

  // Custom styles
  const customStyles = {
    ...getFilterStyle(),
  };

  // Generate blur data for client-side only
  useEffect(() => {
    if (isClient && blurEffect && !blurData && !blurDataURL) {
      try {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        const svg = `
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#${color}" />
          </svg>
        `;
        const svgBase64 = btoa(svg);
        const svgBlurData = `data:image/svg+xml;base64,${svgBase64}`;
        setBlurData(svgBlurData);
      } catch (error) {
        console.error("Error generating blur data", error);
      }
    }
  }, [blurEffect, blurData, blurDataURL]);

  // Determine actual image dimensions
  let imageWidth: number | string = 300;
  let imageHeight: number | string = 300;

  // Get dimensions based on size
  if (sizeMap[size]) {
    if (size === "custom") {
      imageWidth = width || 300;
      imageHeight = height || 300;
    } else if (size === "full") {
      imageWidth = "100%";
      imageHeight = "auto";
    } else {
      imageWidth = sizeMap[size].width;
      imageHeight = sizeMap[size].height;
    }
  }

  // For circular images, ensure width and height are equal
  let finalWidth = imageWidth;
  let finalHeight = imageHeight;

  if (shape === "circle") {
    // If we have numbers, use the larger value for both dimensions
    if (typeof imageWidth === "number" && typeof imageHeight === "number") {
      const maxDimension = Math.max(imageWidth, imageHeight);
      finalWidth = maxDimension;
      finalHeight = maxDimension;
    }
    // If one is a string (%, auto, etc), we can't guarantee a perfect circle
  }

  // CSS style for the image
  const imageContainerStyle: React.CSSProperties = {
    width: finalWidth,
    height: finalHeight,
    position: "relative",
    overflow: "hidden",
    ...(shape === "circle" ? { aspectRatio: "1 / 1" } : {}),
    ...(border ? { border: `3px solid ${borderColor}` } : {}),
  };

  // Blur props
  const blurProps =
    blurEffect && (blurData || blurDataURL)
      ? {
          blurDataURL: blurDataURL || (blurData as string),
          placeholder: "blur" as const,
        }
      : {};

  // Prepare image props for Storybook compatibility
  const imageProps = {
    src,
    alt,
    width: typeof finalWidth === "number" ? finalWidth : undefined,
    height: typeof finalHeight === "number" ? finalHeight : undefined,
    fill: typeof finalWidth !== "number" || typeof finalHeight !== "number",
    className: cn(
      "h-full w-full",
      objectFit && fitMap[objectFit],
      objectPosition && positionMap[objectPosition],
      "transition-all duration-300",
      !isLoaded && "opacity-0",
      isLoaded && "opacity-100"
    ),
    loading,
    priority,
    quality,
    sizes,
    style: customStyles,
    onError: handleError,
    onLoad: handleLoad,
    objectFit,
    objectPosition,
    ...blurProps,
    ...rest,
  };

  // Image component
  const ImageElement = (
    <div
      className={containerClasses}
      style={imageContainerStyle}
      onClick={onClick}
    >
      {renderPlaceholder()}

      {hoverOverlay && (
        <div
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"
          style={{ backgroundColor: overlayColor }}
        />
      )}

      <ImageComponent {...imageProps} />
    </div>
  );

  // If there's a caption, wrap the image in a container with the caption
  if (caption) {
    return (
      <figure className="flex flex-col items-center">
        {ImageElement}
        <figcaption className="mt-2 text-sm text-gray-600">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return ImageElement;
};
