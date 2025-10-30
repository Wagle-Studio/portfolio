import "./Tag.scss";
import { ReactNode } from "react";
import clsx from "clsx";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  variant?: string;
  size?: "small" | "default" | "status";
  iconSide?: string;
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
