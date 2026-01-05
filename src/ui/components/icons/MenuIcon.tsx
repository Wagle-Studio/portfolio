import "./Icon.scss";
import clsx from "clsx";
import { IconProps } from "./IconType";

export const MenuIcon = ({
  className,
  size = "small",
  ...props
}: IconProps) => {
  return (
    <svg
      className={clsx("icon", `icon--${size}`, className)}
      {...props}
      viewBox="0 0 512 512"
    >
      <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
    </svg>
  );
};
