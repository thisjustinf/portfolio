import { type ReactElement } from "react";

export default function Hero(): ReactElement {
  return (
    <section id="hero" className="relative overflow-hidden h-dvh w-dvw">
      <div className="relative m-auto px-4 py-20 sm:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Full Stack Developer</span>
            <span className="block text-primary mt-2">
              Building for the Web
            </span>
          </h1>
          <p className="max-w-2xl text-muted-foreground text-lg sm:text-xl">
            I craft responsive and performant web applications with modern
            technologies. Focused on creating seamless user experiences through
            clean, maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}
