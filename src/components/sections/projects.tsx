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
        <div className="mt-8 flex justify-center">
          <iframe
            width="750"
            height="450"
            src="https://www.youtube.com/embed/9eDBroc_bNs?si=JLht7GELaD1n610l"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-8">
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
            </TextLink>
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
            enable location services.
          </p>
          <p>
            Once the map has loaded, I render a polygon sector representing a
            radius of the desired proximity of fuel stations to the user&apos;s
            location. This is done using{" "}
            <TextLink href="https://turfjs.org/docs/api/sector" target="_blank">
              turf.js&apos;s Sector API.
            </TextLink>{" "}
          </p>
          {/* <p>
          <Image
            className=""
            src="/turfjs_sector.png"
            alt="turf js sector example"
            width={800}
            height={500}
          />
        </p> */}
          <p>
            Check out the{" "}
            <TextLink
              href="https://github.com/lstuartfry/h2-stations-map"
              target="_blank"
            >
              README
            </TextLink>{" "}
            for more information!
          </p>
        </div>
      </Section>
    </Card>
  );
}
