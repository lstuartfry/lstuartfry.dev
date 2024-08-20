import { Header, Subheader } from "@/components/ui/headers";

export default function Home() {
  return (
    <main className="mt-40 flex flex-col items-center justify-between">
      <div>
        <Header>
          Hi, I&apos;m{" "}
          <span className="font-semibold text-purple-500">Lukas</span>
        </Header>
        <div className="mt-12">
          <Subheader>I&apos;m a frontend-focused Software Engineer.</Subheader>
          <Subheader className="mt-4">
            This site will provide details about me, my professional
            experiences, as well as personal projects I&apos;ve built.
          </Subheader>
        </div>
        <div></div>
      </div>
    </main>
  );
}
