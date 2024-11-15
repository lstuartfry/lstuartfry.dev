"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import CSSSVG from "public/css.svg";
import HTMLSVG from "public/html5.svg";
import JavaScriptSVG from "public/js.svg";
import NextJSSVG from "public/nextjs.svg";
import NodeJSSVG from "public/nodejs.svg";
import ReactSVG from "public/react.svg";
import ReduxSVG from "public/redux.svg";
import TypeScriptSVG from "public/typescript.svg";
import WebGLSVG from "public/webgl.svg";

// reference: https://stackoverflow.com/questions/72311188/hydration-failed-error-using-recharts-with-nextjs
const BarChart = dynamic(
  () => import("recharts").then((recharts) => recharts.BarChart),
  { ssr: false }
);

import {
  Bar,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";

type Hex = `#${string}`;

type Skill =
  | "CSS"
  | "HTML"
  | "JavaScript"
  | "Next.js"
  | "NodeJS"
  | "React"
  | "Redux"
  | "TypeScript"
  | "WebGL";

type Data = {
  name: Skill;
  years: number;
  fill: Hex;
  logo: React.FC<React.SVGProps<SVGElement>>;
};

const data: Data[] = [
  {
    name: "TypeScript",
    years: 4,
    fill: "#0078cf",
    logo: TypeScriptSVG,
  },
  {
    name: "JavaScript",
    years: 7,
    fill: "#ffc107",
    logo: JavaScriptSVG,
  },
  {
    name: "HTML",
    years: 7,
    fill: "#e86228",
    logo: HTMLSVG,
  },
  {
    name: "CSS",
    years: 7,
    fill: "#1b84c1",
    logo: CSSSVG,
  },
  {
    name: "React",
    years: 7,
    fill: "#5adafd",
    logo: ReactSVG,
  },
  {
    name: "NodeJS",
    years: 7,
    fill: "#6abf47",
    logo: NodeJSSVG,
  },
  {
    name: "Redux",
    years: 7,
    fill: "#764abc",
    logo: ReduxSVG,
  },
  {
    name: "Next.js",
    years: 2,
    fill: "#000000",
    logo: NextJSSVG,
  },
  {
    name: "WebGL",
    years: 2,
    fill: "#900",
    logo: WebGLSVG,
  },
];

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  const radius = 16;

  const defaultProps = {
    width: 48,
    height: 24,
    x: x + width + 10,
    y: y + radius / 2,
    radius: radius,
  };

  const skill = data.find((item) => item.name === value);

  return skill && <skill.logo {...defaultProps} />;
};

export default function SkillsChart() {
  const { ref, inView } = useInView();
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          id="skillsChart"
          data={data}
          margin={{ bottom: 24, right: 48 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="years">
            <Label
              value="years of experience"
              position="insideBottom"
              offset={-10}
            />
          </XAxis>
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip />
          <Bar
            dataKey="years"
            animationDuration={1500}
            animationEasing="ease-out"
            isAnimationActive={shouldAnimate}
          >
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
