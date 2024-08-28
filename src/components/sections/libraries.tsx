import Image from "next/image";
import Link from "next/link";

import Card from "../ui/card";
import Section from "../ui/section";
import { Subheader } from "../ui/headers";
import TextLink from "../ui/textLink";
import StorybookSVG from "public/storybook.svg";

export default function Libraries() {
  return (
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
              tests for your web applications in a variety of browsers. This is
              my end-to-end testing library of choice! I cannot fathom the
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
            <TextLink href="https://tanstack.com/query/latest" target="_blank">
              TanStack Query
            </TextLink>
            <span className="mt-2">
              An opinionated, declarative query builder and server state manager
              for React applications. I used to spend too much time building out
              custom hooks for fetching data in my projects. It handles response
              caching, background updates and stale data out of the box with
              zero-configuration.
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
  );
}
