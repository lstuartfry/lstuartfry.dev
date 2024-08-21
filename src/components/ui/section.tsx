import { type HTMLAttributes } from "react";

export default function Section({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...rest}>
      <div className="flex flex-col">{children}</div>
    </section>
  );
}
