import { Suspense } from "react";

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
          <Suspense>
            <SkillsChart />
          </Suspense>
        </div>
      </Section>
    </Card>
  );
}
