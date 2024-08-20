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

      {/* About Me */}
      <section>
        <div className="mt-40 flex flex-col">
          <Subheader className="font-semibold underline">About Me</Subheader>
          <div className="flex flex-col gap-6 text-lg leading-7">
            <div className="mt-6">
              I&apos;m a Software Engineer with 7+ years of experience. I have a
              passion for building high-quality, user-friendly applications. I
              have a strong background in frontend development, with expertise
              in TypeScript, React, and Redux. I am always looking to learn new
              technologies and improve my skills!
            </div>
            <div>
              In 2008, I received a Bachelor of Arts in Screenwriting from the
              Loyola Marymount School of Film and Television. I worked in the
              entertainment industry for several years, before discovering my
              true passion for software development. In 2014, I enrolled in a
              coding bootcamp and quickly fell in love with programming. Since
              then, I have worked as a software engineer at several companies,
              building web applications and honing my skills.
            </div>
            <div>
              Throughout my career, I have worked on a wide range of teams, from
              small startups to larger corporations. I particularly enjoy
              working with product managers and product designers to collaborate
              on the roadmap for our products, communicating with our users to
              understand their needs, and executing features with my fellow
              engineers.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
