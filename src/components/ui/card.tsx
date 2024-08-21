import { type HTMLAttributes } from "react";

export default function Card({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    // adds scroll-margin-top to accomodate height of sticky navigation menu
    <div className="scroll-mt-20 border-2 bg-white p-6 shadow-md" {...rest}>
      {children}
    </div>
  );
}
