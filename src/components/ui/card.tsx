import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return <div className="border-2 bg-white p-6 shadow-md">{children}</div>;
}
