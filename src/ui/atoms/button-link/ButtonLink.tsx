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
      target = "_self",
      disabled = false,
      iconSide,
      ...props
    },
    ref
  ) => {
    const isHash = href.startsWith("#");

    if (isHash) {
      return (
        <a
          ref={ref}
          className={clsx(
            className,
            "button-link",
            `button-link--variant-${variant}`,
            disabled ? "button-link--disabled" : "button-link--active",
            iconSide ? `button-link--icon-${iconSide}` : undefined
          )}
          href={href}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref}
        className={clsx(
          className,
          "button-link",
          `button-link--variant-${variant}`,
            disabled ? "button-link--disabled" : "button-link--active",
          iconSide ? `button-link--icon-${iconSide}` : undefined
        )}
        to={href}
        target={target}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
