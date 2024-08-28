import Card from "../ui/card";
import Section from "../ui/section";
import { Subheader } from "../ui/headers";

export default function AboutMe() {
  return (
    <Card id="aboutMe">
      <Section>
        <Subheader className="font-semibold underline">About Me</Subheader>
        <div className="flex flex-col gap-6 text-lg leading-7">
          <div className="mt-6">
            In 2008, I received a Bachelor of Arts in Screenwriting from the
            Loyola Marymount School of Film and Television. I worked in the
            entertainment industry for several years before discovering my true
            passion for Software Development. Building software encapsulated
            everything I loved about Screenwriting - the endless possibilities
            to create anything you could dream up with your imagination.
          </div>
          <div>
            In 2014, I enrolled in a coding bootcamp and soon after landed my
            first job at a small startup in Los Angeles. Since then, my
            strongest professional experiences have come from working with small
            to mid-stage startups. I thoroughly enjoy working in fast-paced,
            hyper-growth environments, as it challenges me to successfully scale
            and mature not only the company&apos;s software development
            processes, but the overall team culture.
          </div>
        </div>
      </Section>
    </Card>
  );
}
