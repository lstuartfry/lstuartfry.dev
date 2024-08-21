import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  target?: string;
};

export default function ButtonLink({
  children,
  className,
  target,
  ...rest
}: Props) {
  return (
    <Link
      className={`rounded-md border border-black bg-red-700 px-4 py-2 text-xl font-semibold text-white transition-shadow duration-300 hover:shadow-[1.5px_3px_0.5px_rgba(0,0,0,0.8)] active:shadow-[inset_1.5px_3px_1px_rgba(0,0,0,0.8)]`}
      {...rest}
    >
      {children}
    </Link>
  );
}
