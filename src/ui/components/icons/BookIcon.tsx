import "./Icon.scss";
import clsx from "clsx";
import { IconProps } from "./IconType";

export const BookIcon = ({
  className,
  size = "small",
  ...props
}: IconProps) => {
  return (
    <svg
      className={clsx("icon", `icon--${size}`, className)}
      {...props}
      viewBox="0 0 24 24"
    >
      <path d="M19 2H6C4.346 2 3 3.346 3 5V19C3 20.654 4.346 22 6 22H19C19.553 22 20 21.552 20 21V3C20 2.448 19.553 2 19 2ZM18 14H6V5C6 4.449 6.449 4 7 4H18V14ZM6 16H18V20H6C5.449 20 5 19.551 5 19C5 18.449 5.449 18 6 18V16Z" />
    </svg>
  );
};
