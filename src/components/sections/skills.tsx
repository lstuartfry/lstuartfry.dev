import Card from "../ui/card";
import Section from "../ui/section";
import SkillsChart from "../skillsChart/skillsChart";
import { Subheader } from "../ui/headers";

export default function Skills() {
  return (
    <Card id="skills">
      <Section>
        <Subheader className="font-semibold underline">Top Skills</Subheader>
        <div className="mt-4">
          <SkillsChart />
        </div>
        <Subheader className="font-semibold underline">
          Additonal Skills
        </Subheader>
        <div className="mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="additional skills"
            src="https://skillicons.dev/icons?i=babel,cypress,docker,express,git,jest,pnpm,py,redux,sass,spring,tailwind,webpack,yarn"
            loading="lazy"
          />
        </div>
      </Section>
    </Card>
  );
}
