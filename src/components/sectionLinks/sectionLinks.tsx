"use client";
import { useState } from "react";
import ButtonLink from "../ui/buttonLink";

function Connector({ selected }: { selected?: string }) {
  const sharedStyles = "top-5 z-0 h-1 w-1/4 transition-color duration-300";
  return (
    <div className="absolute top-5 z-0 flex w-full items-center justify-center">
      <div
        className={`${sharedStyles} ${
          selected === "topSkills" || selected === "projects"
            ? "bg-blue-200"
            : "bg-slate-500"
        }`}
      />
      <div
        className={`${sharedStyles} ${
          selected === "projects" || selected === "libraries"
            ? "bg-blue-200"
            : "bg-slate-500"
        }`}
      />
      <div
        className={`${sharedStyles} ${
          selected === "libraries" || selected === "aboutMe"
            ? "bg-blue-200"
            : "bg-slate-500"
        }`}
      />
    </div>
  );
}

export default function SectionLinks() {
  const [selected, setSelected] = useState<string>();
  return (
    <div className="relative mt-10 flex justify-between">
      <Connector selected={selected} />
      <ButtonLink
        className="z-10"
        href="#skills"
        onMouseEnter={() => setSelected("topSkills")}
        onMouseLeave={() => setSelected("")}
      >
        top skills
      </ButtonLink>
      <ButtonLink
        className="z-10"
        href="#projects"
        onMouseEnter={() => setSelected("projects")}
        onMouseLeave={() => setSelected("")}
      >
        projects
      </ButtonLink>
      <ButtonLink
        className="z-10"
        href="#libraries"
        onMouseEnter={() => setSelected("libraries")}
        onMouseLeave={() => setSelected("")}
      >
        libraries
      </ButtonLink>
      <ButtonLink
        className="z-10"
        href="#aboutMe"
        onMouseEnter={() => setSelected("aboutMe")}
        onMouseLeave={() => setSelected("")}
      >
        about me
      </ButtonLink>
    </div>
  );
}
