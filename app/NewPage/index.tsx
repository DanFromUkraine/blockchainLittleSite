import { ReactNode } from "react";

export default function NewPage({ children }: { children: ReactNode }) {
  return (
    <section className="flex w-screen justify-center py-28 fade-in" >
      <section className="w-9/12 flex flex-col gap-2 items-center">{children}</section>
    </section>
  );
}
