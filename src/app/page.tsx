import Intro from "@/components/sections/intro";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Libraries from "@/components/sections/libraries";
import AboutMe from "@/components/sections/about-me";

export default function Home() {
  return (
    <main className="m-auto mt-12 flex max-w-4xl flex-col justify-between gap-12 p-4 lg:mt-40">
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <Libraries />
      <AboutMe />
    </main>
  );
}
