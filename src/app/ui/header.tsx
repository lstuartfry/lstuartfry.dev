import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <div className="text-2xl lg:text-5xl md:text-3xl xs:text-xl">
      {children}
    </div>
  );
}
