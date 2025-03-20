import React, { useState } from "react";
import type { ImageProps as NextImageProps } from "next/image";

// This is a simplified mock of the Next.js Image component for Storybook
export const NextImageMock: React.FC<NextImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  onClick,
  onLoad,
  onError,
  fill,
  sizes,
  priority,
  quality,
  loading,
  placeholder,
  blurDataURL,
  ...props
}) => {
  // Handle loading state if needed
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to handle image loading complete
  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      // @ts-ignore - simplified mock
      onLoad(event);
    }
  };

  // Convert src to string if it's an object
  const imgSrc =
    typeof src === "string" ? src : (src as any).src || String(src);

  // Merge styles
  const mergedStyles = {
    objectFit: props.objectFit,
    objectPosition: props.objectPosition,
    ...style,
    ...(fill
      ? {
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
        }
      : {}),
    ...(placeholder === "blur" && blurDataURL && !isLoaded
      ? {
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${blurDataURL})`,
        }
      : {}),
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={mergedStyles}
      onClick={onClick}
      onLoad={handleLoad}
      onError={onError}
      loading={loading}
    />
  );
};
