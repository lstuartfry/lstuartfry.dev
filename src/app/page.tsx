import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { Header, Subheader } from "@/components/ui/headers";
import Section from "@/components/ui/section";
import SkillsChart from "@/components/skillsChart/skillsChart";
import TextLink from "@/components/ui/textLink";
import StorybookSVG from "public/storybook.svg";

export default function Home() {
  return (
    <main className="max-w-4xl m-auto mt-40 flex flex-col justify-between">
      <div>
        <Header>
          Hi, I&apos;m{" "}
          <span className="font-semibold text-purple-500">Lukas</span>
        </Header>
        <div className="mt-12">
          <Subheader>I&apos;m a Product-minded Software Developer.</Subheader>
          <div className="mt-10 text-xl leading-8">
            My expertise lies on the frontend, in particular working with{" "}
            <span className="font-semibold text-blue-600">TypeScript</span> and{" "}
            <span className="font-semibold text-sky-700">React</span>.
          </div>
          <div className="mt-3 text-xl leading-8">
            I also have a lifelong passion for learning new technologies,
            stretching my creativity and solving complex problems through
            software.
          </div>
        </div>
        <div></div>
      </div>

      {/* Skills */}
      <Section>
        <Subheader className="font-semibold underline">Top Skills</Subheader>
        <div className="mt-4">
          <Suspense>
            <SkillsChart />
          </Suspense>
        </div>
      </Section>

      {/* Additional Skills */}
      <Section>
        <Subheader className="font-semibold underline">
          Additional Skills & Favorite Libraries
        </Subheader>
        <div className="mt-4 grid grid-cols-2 gap-y-4">
          <div className="flex flex-col">
            <TextLink href="https://playwright.dev/">Playwright</TextLink>
            <span className="mt-2">
              A powerful end-to-end testing library that allows you to write
              tests for your web applications in a variety of browsers. This is
              my end-to-end testing library of choice! I cannot fathom the
              amount of days it has saved me in debugging time.
            </span>
          </div>
          <div className="flex justify-center">
            <Link href="https://playwright.dev/" target="_blank">
              <Image
                src="https://playwright.dev/img/playwright-logo.svg"
                alt="playwright"
                width={128}
                height={128}
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <TextLink href="https://storybook.js.org/">Storybook</TextLink>
            <span className="mt-2">
              Storybook is a fantastic tool for building UI components in
              isolation. Not only does it make it easy to build and iterate on
              components in isolation, it can also be a great tool for
              documenting your components.
            </span>
          </div>
          <div className="flex justify-center">
            <Link href="https://storybook.js.org/" target="_blank">
              <StorybookSVG width={128} height={128} />
            </Link>
          </div>
        </div>
        {/* Tanstack-Query */}
      </Section>

      {/* About Me */}
      <Section>
        <Subheader className="font-semibold underline">About Me</Subheader>
        <div className="flex flex-col gap-6 text-lg leading-7">
          <div className="mt-6">
            In 2008, I received a Bachelor of Arts in Screenwriting from the
            Loyola Marymount School of Film and Television. I worked in the
            entertainment industry for several years, before discovering my true
            passion for software development. In 2014, I enrolled in a coding
            bootcamp and quickly fell in love with programming.
          </div>
          <div>
            Throughout my career, I have worked on a wide range of teams, from
            small startups to larger corporations. I particularly enjoy working
            with product managers and product designers to collaborate on the
            roadmap for our products, communicating with our users to understand
            their needs, and executing features with my fellow engineers.
          </div>
        </div>
      </Section>
    </main>
  );
}
