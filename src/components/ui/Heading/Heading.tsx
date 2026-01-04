import * as React from "react";
import { cn } from "@/lib/cn";

export type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const sizeStyles: Record<NonNullable<HeadingProps["size"]>, string> = {
  1: "text-2xl font-semibold leading-tight",
  2: "text-xl font-semibold leading-tight",
  3: "text-lg font-medium leading-snug",
  4: "text-base font-medium",
  5: "text-sm font-medium",
  6: "text-sm font-medium text-text-muted",
};

export function Heading({
  level,
  size = level,
  children,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={cn(
        "text-text-default",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
