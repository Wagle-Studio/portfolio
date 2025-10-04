import "./Button.scss";
import { forwardRef, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  ref?: React.RefObject<HTMLButtonElement | null>;
  variant?: string;
  iconSide?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", iconSide, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          className,
          "button",
          `button--variant-${variant}`,
          iconSide ? `button--icon-${iconSide}` : undefined
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
