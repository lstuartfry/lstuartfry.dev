"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import JavaScriptSVG from "public/js.svg";
import NextJSSVG from "public/nextjs.svg";
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

const data = [
  {
    name: "TypeScript",
    years: 4,
    fill: "#0078CF",
  },
  {
    name: "React",
    years: 7,
    fill: "#5ADAFD",
  },
  {
    name: "JavaScript",
    years: 7,
    fill: "#ffc107",
  },
  {
    name: "Redux",
    years: 7,
    fill: "#764abc",
  },
  {
    name: "Next.js",
    years: 2,
    fill: "#000000",
  },
  {
    name: "WebGL",
    years: 2,
    fill: "#900",
  },
];

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  const radius = 32;

  const defaultProps = {
    width: 24,
    height: 24,
    x: x + width + 10,
    y: y + radius / 2,
    radius: radius,
  };

  switch (value) {
    case "JavaScript":
      return <JavaScriptSVG {...defaultProps} />;
    case "Next.js":
      return <NextJSSVG {...defaultProps} />;
    case "React":
      return <ReactSVG {...defaultProps} />;
    case "Redux":
      return <ReduxSVG {...defaultProps} />;
    case "TypeScript":
      return <TypeScriptSVG {...defaultProps} />;
    case "WebGL":
      return <WebGLSVG {...defaultProps} width={48} />;
  }
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
          margin={{ bottom: 24, right: 20 }}
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
