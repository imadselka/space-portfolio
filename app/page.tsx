import Encryption from "./components/main/Encryption/Encryption";
import Hero from "./components/main/Hero/Hero";
import Projects from "./components/main/Projects/Projects";
import Skills from "./components/main/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
