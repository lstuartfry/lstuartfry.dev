import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { Header, Subheader } from "@/components/ui/headers";
import Card from "@/components/ui/card";
import Section from "@/components/ui/section";
import SkillsChart from "@/components/skillsChart/skillsChart";
import TextLink from "@/components/ui/textLink";
import StorybookSVG from "public/storybook.svg";
import ButtonLink from "@/components/ui/buttonLink";

export default function Home() {
  return (
    <main className="m-auto mt-12 flex max-w-4xl flex-col justify-between gap-12 p-4 lg:mt-40">
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
          <div className="mt-10 flex flex-col justify-between gap-3 md:flex-row">
            <ButtonLink href="#skills">top skills</ButtonLink>
            <ButtonLink href="#projects">projects</ButtonLink>
            <ButtonLink href="#libraries">libraries</ButtonLink>
            <ButtonLink href="#aboutMe">about me</ButtonLink>
          </div>
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
          <Subheader className="font-semibold underline">
            Current Projects
          </Subheader>
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
              fuel, or offline altogether. This application is designed to give
              a user a quick glimpse into stations near their location, or any
              address they would like to enter.
            </p>
            <p>
              This application uses data fetched from the{" "}
              <TextLink href="https://www.nrel.gov/" target="_blank">
                National Renewable Energy Laboratory
              </TextLink>{" "}
              for all public hydrogen gas stations in California, along with the
              browser&apos;s native{" "}
              <TextLink
                href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
                target="_blank"
              >
                Geolocation API
              </TextLink>
              to render stations on a map that are within close proximity to the
              user&apos;s location.
            </p>
            <p>
              For the base layer of the map, I use{" "}
              <TextLink
                href="https://docs.mapbox.com/mapbox-gl-js/guides"
                target="_blank"
              >
                mapbox-gl-js
              </TextLink>
              . I also utilize mapbox&apos;s{" "}
              <TextLink
                href="https://docs.mapbox.com/api/search/geocoding/"
                target="_blank"
              >
                Geocoding API
              </TextLink>{" "}
              for users that prefer to enter an address directly, rather than
              enable location services.
            </p>
            <p>
              Once the map has loaded, I render a polygon sector representing a
              radius of the desired proximity of fuel stations to the
              user&apos;s location. This is done using{" "}
              <TextLink
                href="https://turfjs.org/docs/api/sector"
                target="_blank"
              >
                turf.js&apos;s Sector API.
              </TextLink>{" "}
              Here is an example directly from their documentation:
            </p>
            <p>
              <Image
                className=""
                src="/turfjs sector.png"
                alt="turf js sector example"
                width={800}
                height={500}
              />
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

      {/* Past Projects */}
      <Card>
        <Section>
          <Subheader className="font-semibold underline">
            Past Projects
          </Subheader>
          <p>
            <TextLink
              className="text-lg"
              href="https://moveparallel.com"
              target="_blank"
            >
              Parallel Systems - Fleet App
            </TextLink>
          </p>
          <p>
            <Image
              className=""
              src="/fleet_screenshot.png"
              alt="fleet application screenshot"
              width={800}
              height={500}
            />
          </p>
          <div className="mt-8">
            <p>
              <strong>&quot;The Future of Freight is Rail&quot;</strong> -
              Parallel Systems is on a mission to disrupt the Freight industry
              and move freight transportation off of trucks and onto our
              world&apos;s railroad systems. They are building their own
              battery-powered vehicles, and they are also building their own
              software platform that seamlessly integrates with existing train
              control systems. This is the user interface that I primarily
              worked on during my tenure at Parallel.
            </p>
            <p>
              Given the fact these vehicles are driver-less, and remote
              operators can theoretically be tens of miles away from the vehicle
              itself, the paramount goal and strongest challenge in building
              this interface was <strong>safety.</strong>As a frontend developer
              and consumer of realtime data associated with the rail network and
              vehicle telemetry, I was a key contributor in translating these
              data points into a robust yet user-friendly interface that
              seamlessly integrated into existing rail business systems.
            </p>
            <p>
              Among my favorite direct contributions to this application are the
              &quot;Route Intervention&quot; cards (pictured above) that are
              rendered in the UI once a user has issued a movement command to a
              vehicle. These cards are designed to inform the operator when they
              will have to perform some type of action in order to allow the
              vehicle to proceed along it&apos;s route.
            </p>
            <p>
              The sequence of these interventions and the variable distance
              between the vehicle and the point of intervention is especially
              important. Using railroad GeoJSON and a combination of geospatial
              calculation helpers from the{" "}
              <TextLink href="https://turfjs.org/" target="_blank">
                turf.js library
              </TextLink>
              , I was able to accurately calculate distances along the track
              between intervention points and the vehicle, ensuring operators
              were given precise instructions in realtime throughout a
              vehicle&apos;s planned route.
            </p>
            <p>
              <Image
                className=""
                src="/turfjs.png"
                alt="turf.js screenshot"
                width={800}
                height={500}
              />
            </p>
            <p>
              Check out the official{" "}
              <TextLink
                href="https://moveparallel.com/product/"
                target="_blank"
              >
                Product Page
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
                handles response caching, background updates and stale data out
                of the box with zero-configuration.
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
              fast-paced, hyper-growth environments, as it challenges me to
              successfully scale and mature not only the company&apos;s software
              development processes, but the overall team culture.
            </div>
          </div>
        </Section>
      </Card>
    </main>
  );
}
