import React, { ReactNode } from "react";
import { cn } from "../../utils";

// Tipos para las propiedades del grid
type LayoutType = "grid" | "masonry" | "carousel" | "list";
type AlignmentType = "start" | "center" | "end" | "stretch";
type GapSize = "none" | "sm" | "md" | "lg" | "xl";
type ColumnsType = 1 | 2 | 3 | 4 | 5 | 6;
type ColsConfigType = {
  xs?: ColumnsType;
  sm?: ColumnsType;
  md?: ColumnsType;
  lg?: ColumnsType;
  xl?: ColumnsType;
};

// Mapeo de espaciado a clases CSS
const gapMap: Record<GapSize, string> = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

// Mapeo de alineación a clases CSS
const alignItemsMap: Record<AlignmentType, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

// Mapeo de columnas a clases CSS para diferentes breakpoints
const generateColsClasses = (columns: ColsConfigType): string => {
  const { xs = 1, sm = 2, md = 3, lg = 4, xl = 4 } = columns;

  return cn(
    `grid-cols-${xs}`,
    sm ? `sm:grid-cols-${sm}` : "",
    md ? `md:grid-cols-${md}` : "",
    lg ? `lg:grid-cols-${lg}` : "",
    xl ? `xl:grid-cols-${xl}` : ""
  );
};

export interface CardGridProps {
  /**
   * Los children deben ser componentes de tipo card
   */
  children: ReactNode;

  /**
   * Tipo de layout para organizar las cards
   */
  layout?: LayoutType;

  /**
   * Tamaño del espaciado entre cards
   */
  gap?: GapSize;

  /**
   * Configuración de columnas para diferentes breakpoints
   */
  columns?: ColsConfigType;

  /**
   * Alineación vertical de los items
   */
  alignment?: AlignmentType;

  /**
   * Título opcional para la sección
   */
  title?: string;

  /**
   * Descripción opcional para la sección
   */
  description?: string;

  /**
   * Clases CSS adicionales para el contenedor
   */
  className?: string;

  /**
   * Clases CSS adicionales para el grid de cards
   */
  gridClassName?: string;

  /**
   * Clases CSS adicionales para el título
   */
  titleClassName?: string;

  /**
   * Clases CSS adicionales para la descripción
   */
  descriptionClassName?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  children,
  layout = "grid",
  gap = "md",
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
  alignment = "stretch",
  title,
  description,
  className,
  gridClassName,
  titleClassName,
  descriptionClassName,
}) => {
  // Determinar las clases para el contenedor principal
  const containerClasses = cn("w-full", className);

  // Generar las clases para el título si existe
  const titleClasses = cn("text-2xl font-bold mb-2", titleClassName);

  // Generar las clases para la descripción si existe
  const descriptionClasses = cn("text-gray-600 mb-6", descriptionClassName);

  // Determinar las clases para el grid según el tipo de layout
  const gridClasses = cn(
    // Clases base para todos los layouts
    "w-full",
    gapMap[gap],

    // Clases específicas por tipo de layout
    layout === "grid" && [
      "grid",
      generateColsClasses(columns),
      alignItemsMap[alignment],
    ],

    layout === "masonry" && [
      "columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4",
    ],

    layout === "carousel" && [
      "flex overflow-x-auto snap-x snap-mandatory",
      "scroll-smooth scrollbar-hide",
      "py-2",
    ],

    layout === "list" && ["flex flex-col", alignItemsMap[alignment]],

    gridClassName
  );

  // Wrapper para elementos según el layout
  const wrapItems = () => {
    if (layout === "carousel") {
      return React.Children.map(children, (child) => (
        <div className="snap-center shrink-0 px-2 w-80 sm:w-96">{child}</div>
      ));
    }

    if (layout === "masonry") {
      return React.Children.map(children, (child) => (
        <div className="break-inside-avoid mb-4">{child}</div>
      ));
    }

    return children;
  };

  return (
    <div className={containerClasses}>
      {title && <h2 className={titleClasses}>{title}</h2>}
      {description && <p className={descriptionClasses}>{description}</p>}
      <div className={gridClasses}>{wrapItems()}</div>
    </div>
  );
};
