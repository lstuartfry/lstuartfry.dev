import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className="mt-40 flex flex-col">{children}</div>
    </section>
  );
}
