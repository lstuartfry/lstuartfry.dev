import { Header, Subheader } from "@/components/ui/headers";
import Section from "@/components/ui/section";

export default function Home() {
  return (
    <main className="mt-40 flex flex-col justify-between">
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

      {/* About Me */}
      <Section>
        <Subheader className="font-semibold underline">About Me</Subheader>
        <div className="flex flex-col gap-6 text-lg leading-7">
          {/* <div className="mt-6">
            I&apos;m a Software Developer with 7+ years of experience. I have a
            passion for building high-quality, user-friendly applications. I
            have a strong background in frontend development, with expertise in
            TypeScript, React, and Redux. I am always looking to learn new
            technologies and improve my skills!
          </div> */}
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

      {/* Skills */}
      <Section>
        <Subheader className="font-semibold underline">Skills</Subheader>
        <div className="mt-4 grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-semibold">Languages: </span>
              <span>TypeScript, JavaScript, HTML, CSS, Python</span>
            </div>
            <div>
              <span className="font-semibold">Frontend/UI: </span>
              <span>React, Redux, Next.js, WebGL, Storybook, Tailwind CSS</span>
            </div>
            <div>
              <span className="font-semibold">Backend: </span>
              <span>Node.js, Express</span>
            </div>
            <div>
              <span className="font-semibold">Testing Libraries: </span>
              <span>Playwright, Cypress, Jest, React Testing Library</span>
            </div>
          </div>
          <div>carousal</div>
        </div>
      </Section>
    </main>
  );
}
