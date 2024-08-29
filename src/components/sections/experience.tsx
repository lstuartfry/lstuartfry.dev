import Image from "next/image";

import Card from "../ui/card";
import Section from "../ui/section";
import { Subheader } from "../ui/headers";
import TextLink from "../ui/textLink";

export default function Experience() {
  return (
    <Card id="experience">
      <Section>
        <Subheader className="font-semibold underline">
          Professional Experience
        </Subheader>
        <p>
          <TextLink
            className="text-lg"
            href="https://moveparallel.com"
            target="_blank"
          >
            Parallel Systems - Fleet App
          </TextLink>
        </p>
        <p>
          <Image
            className=""
            src="/fleet_screenshot.png"
            alt="fleet application screenshot"
            width={800}
            height={500}
          />
        </p>
        <div className="mt-4">
          <p>
            <strong>&quot;The Future of Freight is Rail&quot;</strong> -
            Parallel Systems is on a mission to disrupt the Freight industry and
            move freight transportation off of trucks and onto our world&apos;s
            railroad systems. They are building their own battery-powered
            vehicles, and they are also building their own software platform
            that seamlessly integrates with existing train control systems. This
            is the user interface that I primarily worked on during my tenure at
            Parallel.
          </p>
          <p>
            Given the fact these vehicles are driver-less, and remote operators
            can theoretically be tens of miles away from the vehicle itself, the
            paramount goal and strongest challenge in building this interface
            was <strong>safety.</strong>As a frontend developer and consumer of
            realtime data associated with the rail network and vehicle
            telemetry, I was a key contributor in translating these data points
            into a robust yet user-friendly interface that seamlessly integrated
            into existing rail business systems.
          </p>
          <p>
            Among my favorite direct contributions to this application are the
            &quot;Route Intervention&quot; cards (pictured above) that are
            rendered in the UI once a user has issued a movement command to a
            vehicle. These cards are designed to inform the operator when they
            will have to perform some type of action in order to allow the
            vehicle to proceed along it&apos;s route.
          </p>
          <p>
            The sequence of these interventions and the variable distance
            between the vehicle and the point of intervention is especially
            important. Using railroad GeoJSON and a combination of geospatial
            calculation helpers from the{" "}
            <TextLink href="https://turfjs.org/" target="_blank">
              turf.js library
            </TextLink>
            , I was able to accurately calculate distances along the track
            between intervention points and the vehicle, ensuring operators were
            given precise instructions in realtime throughout a vehicle&apos;s
            planned route.
          </p>
          <p>Here is a quick demo of the feature in a simulated environment:</p>
          <div className="mt-4 flex justify-center">
            <iframe
              width="750"
              height="450"
              src="https://www.youtube.com/embed/B-zvsvqVNP4?si=r_8zm9gDYwvPJGOD"
              title="Fleet UI Route Interventions video demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p>
            Check out the official{" "}
            <TextLink href="https://moveparallel.com/product/" target="_blank">
              Product Page
            </TextLink>{" "}
            for more information!
          </p>
        </div>
      </Section>
    </Card>
  );
}
