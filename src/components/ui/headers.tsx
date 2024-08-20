import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Header({ children, className }: Props) {
  return (
    <div className={`xs:text-xl text-3xl lg:text-5xl ${className}`}>
      {children}
    </div>
  );
}

export function Subheader({ children, className }: Props) {
  return (
    <div className={`xs:text-lg text-xl lg:text-2xl ${className}`}>
      {children}
    </div>
  );
}
