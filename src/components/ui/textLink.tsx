import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
};

export default function TextLink({ children, ...rest }: Props) {
  return (
    <Link className="font-semibold text-blue-500" {...rest}>
      {children}
    </Link>
  );
}
