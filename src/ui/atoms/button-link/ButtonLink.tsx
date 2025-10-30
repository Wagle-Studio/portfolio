import "./ButtonLink.scss";
import { ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { Link } from "react-router";

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
      ...props
    },
    ref
  ) => {
    const isHash = href.startsWith("#");

    const classes = clsx(
      className,
      "button-link",
      `button-link--variant-${variant}`,
      `button-link--size-${size}`,
      disabled ? "button-link--disabled" : "button-link--active",
      iconSide ? `button-link--icon-${iconSide}` : undefined
    );

    if (isHash) {
      return (
        <a ref={ref} className={classes} href={href} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} className={classes} to={href} target={target} {...props}>
        {children}
      </Link>
    );
  }
);
