import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import About from "./sections/about";
import Skills from "./sections/skills";
import { type ReactElement } from "react";
import Hero from "./sections/hero";

export default function Home(): ReactElement {
  return (
    <div className="container font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <About />
        <Separator />
        <Skills />
      </main>
    </div>
  );
}
