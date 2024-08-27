import Link, { LinkProps } from "next/link";
import { HTMLAttributes, ReactNode } from "react";

type Props = LinkProps &
  HTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
  };

export default function ButtonLink({ children, className, ...rest }: Props) {
  return (
    <Link
      className={`rounded-md border border-blue-600 bg-blue-500 px-4 py-1.5 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-200 hover:text-black hover:shadow-[1.5px_3px_0.5px_rgba(0,0,0,0.8)] active:shadow-[inset_1.5px_3px_1px_rgba(0,0,0,0.8)] md:px-[18px] md:text-lg ${className} items-center text-center`}
      {...rest}
    >
      {children}
    </Link>
  );
}
