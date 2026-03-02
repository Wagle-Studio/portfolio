import "./tag.scss";
import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type TagVariant = "default" | "ghost" | "status";
type TagSize = "small" | "default";
type TagIconSide = "right";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  iconSide?: TagIconSide;
}

export const Tag = ({
  children,
  className,
  size = "default",
  variant = "default",
  iconSide,
  ...props
}: TagProps) => {
  return (
    <span
      className={clsx(
        className,
        "tag",
        `tag--size-${size}`,
        `tag--variant-${variant}`,
        iconSide ? `tag--icon-${iconSide}` : undefined
      )}
      {...props}
    >
      {children}
    </span>
  );
};
