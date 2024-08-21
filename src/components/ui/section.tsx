import { type HTMLAttributes } from "react";

export default function Section({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="scroll-mt-24" {...rest}>
      <div className="mt-40 flex flex-col">{children}</div>
    </section>
  );
}
