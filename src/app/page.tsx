import Image from "next/image";
import { Header, Subheader } from "@/components/ui/headers";

export default function Home() {
  return (
    <main className="mt-40 flex flex-col justify-between">
      <div className="flex justify-between">
        <div>
          <Header>
            Hi, I&apos;m{" "}
            <span className="font-semibold text-purple-500">Lukas</span>
          </Header>
          <div className="mt-12">
            <Subheader>I&apos;m a Product-minded Software Engineer.</Subheader>
            <div className="mt-10 text-xl leading-8">
              My expertise lies on the frontend, in particular working with{" "}
              <span className="font-semibold text-blue-600">TypeScript</span>{" "}
              and <span className="font-semibold text-sky-700">React</span>.
            </div>
            <div className="mt-3 text-xl leading-8">
              This site will provide details about me, my projects and my
              professional experiences.
            </div>
          </div>
          <div></div>
        </div>
        <Image
          src="/profile photo.jpg"
          width={300}
          height={300}
          alt="lukas profile photo"
        />
      </div>
    </main>
  );
}
