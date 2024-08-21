import { type HTMLAttributes } from "react";

export function Header({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`xs:text-xl text-3xl lg:text-5xl ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function Subheader({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`xs:text-lg text-xl lg:text-2xl ${className}`} {...rest}>
      {children}
    </div>
  );
}
