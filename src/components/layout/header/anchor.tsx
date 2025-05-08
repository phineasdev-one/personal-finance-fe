import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Link, useLocation } from "react-router-dom";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
};

export default function Anchor({
  absolute,
  className = "",
  activeClassName = "",
  disabled,
  children,
  ...props
}: AnchorProps) {
  const location = useLocation();
  const path = location.pathname;

  let isMatch = absolute ? props.to.toString().split("/")[1] == path.split("/")[1] : path === props.to;

  if (props.to.toString().includes("http")) isMatch = false;

  if (disabled) return <div className={cn(className, "cursor-not-allowed")}>{children}</div>;
  return (
    <Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}
    </Link>
  );
}
