import "./ButtonLink.scss";
import { ReactNode, forwardRef } from "react";
import clsx from "clsx";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  href: string;
  variant?: string;
  size?: "small" | "medium";
  target?: string;
  disabled?: boolean;
  iconSide?: string;
  rel?: string;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      href,
      variant = "primary",
      size = "medium",
      target = "_self",
      disabled = false,
      iconSide,
      rel,
      ...props
    },
    ref
  ) => {
    const isExternal = /^https?:\/\//i.test(href);

    const classes = clsx(
      className,
      "button-link",
      `button-link--variant-${variant}`,
      `button-link--size-${size}`,
      disabled ? "button-link--disabled" : "button-link--active",
      iconSide ? `button-link--icon-${iconSide}` : undefined
    );

    const relValue =
      rel ?? (isExternal && target === "_blank" ? "noreferrer noopener" : undefined);

    return (
      <a
        ref={ref}
        className={classes}
        href={href}
        target={target}
        rel={relValue}
        {...props}
      >
        {children}
      </a>
    );
  }
);
