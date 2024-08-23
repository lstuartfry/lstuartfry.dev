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
      className={`rounded-md border border-blue-600 bg-blue-500 px-3 py-1.5 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-200 hover:text-black hover:shadow-[1.5px_3px_0.5px_rgba(0,0,0,0.8)] active:shadow-[inset_1.5px_3px_1px_rgba(0,0,0,0.8)]`}
      {...rest}
    >
      {children}
    </Link>
  );
}
