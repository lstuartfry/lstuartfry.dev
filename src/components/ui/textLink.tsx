import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  target?: string;
};

export default function TextLink({
  children,
  className,
  target,
  ...rest
}: Props) {
  return (
    <Link
      className={`font-semibold text-blue-500 ${className}`}
      target={target}
      {...rest}
    >
      {children}
    </Link>
  );
}
