import ButtonLink from "../ui/buttonLink";
import Card from "../ui/card";
import { Header, Subheader } from "../ui/headers";

export default function Intro() {
  return (
    <div className="min-h-screen">
      <Header>
        Hi, I&apos;m{" "}
        <span className="font-semibold text-purple-500">Lukas</span>.
      </Header>
      <div className="mt-12">
        <Subheader>I&apos;m a Product-minded Software Developer.</Subheader>
        <div className="mt-10 text-xl leading-8">
          My expertise lies on the frontend, in particular working with{" "}
          <span className="font-semibold text-blue-600">TypeScript</span> and{" "}
          <span className="font-semibold text-sky-700">React</span>.
        </div>
        <div className=" text-xl leading-8">
          I have a lifelong passion for learning new technologies, stretching my
          creativity and solving complex problems through software.
        </div>
      </div>
      <Card className="mt-16">
        <Subheader className="flex justify-center">
          Check out these sections below
        </Subheader>
        <div className="mt-10 flex flex-col justify-between gap-3 md:flex-row">
          <ButtonLink href="#skills">top skills</ButtonLink>
          <ButtonLink href="#experience">experience</ButtonLink>
          <ButtonLink href="#projects">projects</ButtonLink>
          <ButtonLink href="#libraries">libraries</ButtonLink>
          <ButtonLink href="#aboutMe">about me</ButtonLink>
        </div>
      </Card>
    </div>
  );
}
