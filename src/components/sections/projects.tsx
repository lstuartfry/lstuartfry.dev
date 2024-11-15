import Image from "next/image";

import Card from "../ui/card";
import Section from "../ui/section";
import { Subheader } from "../ui/headers";
import TextLink from "../ui/textLink";

export default function Projects() {
  return (
    <Card id="projects">
      <Section>
        <Subheader className="font-semibold underline">
          Current Projects
        </Subheader>
        <p>
          <TextLink
            className="text-lg"
            href="https://h2stationsmap.dev"
            target="_blank"
          >
            Hydrogen Stations Map
          </TextLink>
        </p>
        <p>
          <span>
            In Production @{" "}
            <TextLink href="https://h2stationsmap.dev" target="_blank">
              https://h2stationsmap.dev
            </TextLink>
          </span>
        </p>
        <p>
          <Image
            className=""
            src="/h2-stations-map-screenshot.png"
            alt="hydrogen stations map screenshot"
            width={800}
            height={500}
          />
        </p>
        <div className="mt-4">
          <p>
            I currently live in Los Angeles, and have a lease on a hydrogen
            fuel-cell vehicle. The infrastructure for hydrogen fueling stations
            is still quite lacking, and even amongst the stations that exist in
            the Los Angeles area, they are often either out of fuel, or offline
            altogether. This application is designed to give a user a quick
            glimpse into stations near their location, or any address they would
            like to enter.
          </p>
          <p>
            This application uses data fetched from the{" "}
            <TextLink href="https://www.nrel.gov/" target="_blank">
              National Renewable Energy Laboratory
            </TextLink>{" "}
            for all public hydrogen gas stations in California, along with the
            browser&apos;s native{" "}
            <TextLink
              href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
              target="_blank"
            >
              Geolocation API
            </TextLink>{" "}
            to render stations on a map that are within close proximity to the
            user&apos;s location.
          </p>
          <p>
            For the base layer of the map, I use{" "}
            <TextLink
              href="https://docs.mapbox.com/mapbox-gl-js/guides"
              target="_blank"
            >
              mapbox-gl-js
            </TextLink>
            . I also utilize mapbox&apos;s{" "}
            <TextLink
              href="https://docs.mapbox.com/api/search/geocoding/"
              target="_blank"
            >
              Geocoding API
            </TextLink>{" "}
            for users that prefer to enter an address directly, rather than
            enable location services. This feature is optimized using their new{" "}
            <TextLink
              href="https://www.mapbox.com/address-autofill"
              target="_blank"
            >
              Address Autofill API.
            </TextLink>
          </p>
          <p>
            Once the map has loaded, I render a polygon sector representing a
            radius of the desired proximity of fuel stations to the user&apos;s
            location. This is done using{" "}
            <TextLink href="https://turfjs.org/docs/api/sector" target="_blank">
              turf.js&apos;s Sector API.
            </TextLink>{" "}
          </p>
          <div className="mt-4 flex justify-center">
            <iframe
              width="700"
              height="394"
              src="https://www.youtube.com/embed/TbUju2Y3nyo?si=C2bBsqI4PTtWh-Hm"
              title="Hydrogen Stations Map video demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-12">
            Check out the{" "}
            <TextLink
              href="https://github.com/lstuartfry/h2-stations-map"
              target="_blank"
            >
              README
            </TextLink>{" "}
            for more information!
          </div>
        </div>
      </Section>
    </Card>
  );
}
