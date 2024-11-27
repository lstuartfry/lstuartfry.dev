import Link from "next/link";

import ThemeToggle from "./themeToggle";
import HomeSVG from "public/home.svg";
import GithubSVG from "public/github.svg";
import LinkedinSVG from "public/linkedin.svg";
import TwitterSVG from "public/twitter.svg";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 border-b-2 border-gray-200 bg-white p-4 dark:border-slate-600 dark:bg-black">
      <div className="m-auto flex max-w-4xl items-center justify-between">
        <div>
          <Link
            className="flex items-center gap-2"
            href="/"
            aria-label="home link"
          >
            <HomeSVG width={32} height={32} className="text-purple-500" />
            <span>Lukas Stuart-Fry</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="https://github.com/lstuartfry/"
            target="_blank"
            aria-label="github link"
          >
            <GithubSVG
              className="dark:rounded-full dark:bg-white"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href="https://linkedin.com/in/lukasstuartfry"
            target="_blank"
            aria-label="linkedin link"
          >
            <LinkedinSVG width={32} height={32} />
          </Link>
          <Link
            href="https://x.com/lstuartfry"
            target="_blank"
            aria-label="twitter link"
          >
            <TwitterSVG width={32} height={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
