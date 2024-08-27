import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { Header, Subheader } from "@/components/ui/headers";

import Card from "@/components/ui/card";
import Section from "@/components/ui/section";
import SkillsChart from "@/components/skillsChart/skillsChart";
import TextLink from "@/components/ui/textLink";
import StorybookSVG from "public/storybook.svg";
import SectionLinks from "@/components/sectionLinks/sectionLinks";

export default function Home() {
  return (
    <main className="m-auto mt-40 flex max-w-4xl flex-col justify-between gap-12 p-4">
      <div className="min-h-screen">
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
          <div className=" text-xl leading-8">
            I have a lifelong passion for learning new technologies, stretching
            my creativity and solving complex problems through software.
          </div>
        </div>
        <Card className="mt-16">
          <Subheader className="flex justify-center">
            Check out these sections below
          </Subheader>
          <SectionLinks />
        </Card>
      </div>

      {/* Skills */}
      <Card id="skills">
        <Section>
          <Subheader className="font-semibold underline">Top Skills</Subheader>
          <div className="mt-4">
            <Suspense>
              <SkillsChart />
            </Suspense>
          </div>
        </Section>
      </Card>

      {/* Projects */}
      <Card id="projects">
        <Section>
          <Subheader className="font-semibold underline">Projects</Subheader>
          <p>
            <TextLink
              className="text-lg"
              href="https://h2stationsmap.dev"
              target="_blank"
            >
              Hydrogen Stations Map
            </TextLink>
          </p>
          <p>
            <span>
              In Production @{" "}
              <TextLink href="https://h2stationsmap.dev" target="_blank">
                https://h2stationsmap.dev
              </TextLink>
            </span>
          </p>
          <div className="mt-8 flex justify-center">
            <iframe
              width="750"
              height="450"
              src="https://www.youtube.com/embed/9eDBroc_bNs?si=JLht7GELaD1n610l"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-8">
            <p>
              I currently live in Los Angeles, and have a lease on a hydrogen
              fuel-cell vehicle. The infrastructure for hydrogen fueling
              stations is still quite lacking, and even amongst the stations
              that exist in the Los Angeles area, they are often either out of
              fuel, or offline altogether. A similar web application does
              currently exist{" "}
              <TextLink href="https://h2fcp.org/stationmap" target="_blank">
                (Hydrogen Stations Map)
              </TextLink>
              , but as a frequent user of it, there are improvements I&apos;d
              like to make on it. I built this application using Next.js.
            </p>
            <p>
              Check out the{" "}
              <TextLink
                href="https://github.com/lstuartfry/h2-stations-map"
                target="_blank"
              >
                README
              </TextLink>{" "}
              for more information!
            </p>
          </div>
        </Section>
      </Card>

      {/* Libraries */}
      <Card id="libraries">
        <Section>
          <Subheader className="font-semibold underline">
            Favorite Libraries
          </Subheader>
          <div className="mt-4 grid grid-cols-2 items-center gap-y-4">
            <div className="flex flex-col">
              <TextLink href="https://playwright.dev/" target="_blank">
                Playwright
              </TextLink>
              <span className="mt-2">
                A powerful end-to-end testing library that allows you to write
                tests for your web applications in a variety of browsers. This
                is my end-to-end testing library of choice! I cannot fathom the
                amount of days it has saved me in debugging time.
              </span>
            </div>
            <div className="flex justify-center">
              <Link href="https://playwright.dev/" target="_blank">
                <Image
                  src="https://playwright.dev/img/playwright-logo.svg"
                  alt="playwright logo"
                  width={128}
                  height={128}
                />
              </Link>
            </div>
            <div className="flex flex-col">
              <TextLink href="https://storybook.js.org/" target="_blank">
                Storybook
              </TextLink>
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
            <div className="flex flex-col">
              <TextLink
                href="https://tanstack.com/query/latest"
                target="_blank"
              >
                TanStack Query
              </TextLink>
              <span className="mt-2">
                An opinionated, declarative query builder and server state
                manager for React applications. I used to spend too much time
                building out custom hooks for fetching data in my projects. It
                handles caching, background updates and stale data out of the
                box with zero-configuration.
              </span>
            </div>
            <div className="flex justify-center">
              <Link href="https://tanstack.com/query/latest" target="_blank">
                <Image
                  src="/tanstack-query.png"
                  alt="tanstack query logo"
                  width={128}
                  height={128}
                />
              </Link>
            </div>
          </div>
        </Section>
      </Card>

      {/* About Me */}
      <Card id="aboutMe">
        <Section>
          <Subheader className="font-semibold underline">About Me</Subheader>
          <div className="flex flex-col gap-6 text-lg leading-7">
            <div className="mt-6">
              In 2008, I received a Bachelor of Arts in Screenwriting from the
              Loyola Marymount School of Film and Television. I worked in the
              entertainment industry for several years before discovering my
              true passion for Software Development. Building software
              encapsulated everything I loved about Screenwriting - the endless
              possibilities to create anything you could dream up with your
              imagination.
            </div>
            <div>
              In 2014, I enrolled in a coding bootcamp and soon after landed my
              first job at a small startup in Los Angeles. Since then, my
              strongest professional experiences have come from working with
              small to mid-stage startups. I thoroughly enjoy working in
              fast-pace, hyper-growth environments, as it challenges me to
              successfully scale and mature not only our software development
              processes, but our overall team culture.
            </div>
          </div>
        </Section>
      </Card>
    </main>
  );
}
