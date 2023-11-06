import SectionImg from "./components/section-image";
import SectionVideo from "./components/section-video";

export default function Home() {
  return (
    <div>
      <div>
        <SectionVideo
          title="Model Y"
          subtitle="Lease starting at $399/mo*"
          bgVideo="/videos/Homepage-Model-Y-Desktop-NA.mp4"
          VideoClass=""
        />
      </div>
      <div>
        <SectionImg
          title="Model 3"
          subtitle="Lease starting at $329/mo*"
          bgImage="/images/background/Homepage-Model-3-Desktop-NA.avif"
          disclaimer="*Excludes taxes and fees with price subject to change. Available
          in select states. See Details"
        />
      </div>
      <div>
        <SectionImg
          title="Model X"
          subtitle="From $68,590*"
          bgImage="/images/background/Homepage-Model-X-Desktop-LHD.avif"
          disclaimer="*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change.
          Learn about est. gas savings."
        />
      </div>
      <div>
        <SectionImg
          title="Model S"
          subtitle="From $71,090*"
          bgImage="/images/background/Homepage-Model-S-Desktop-LHD-6.22.avif"
          disclaimer="*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change.
          Learn about est. gas savings"
        />
      </div>
      <div>
        <SectionVideo
          title="Experience Tesla"
          subtitle="Schedule a Demo Drive today"
          bgVideo="/videos/Homepage-Demo-Drive-Desktop-NA.mp4"
         
        />
      </div>
      <div>
        <SectionImg
          title="Solar Panels"
          subtitle=""
          bgImage="/images/background/Desktop_solarPanels.avif"
        />
      </div>
      <div>
        <SectionImg
          title="Solar Roof"
          subtitle=""
          bgImage="/images/background/Homepage-SolarRoof-Desktop-Global.avif"
        />
      </div>
      <div>
        <SectionImg
          title="Powerwall"
          subtitle=""
          bgImage="/images/background/Homepage-Powerwall-Desktop.avif"
        />
      </div>
      <div>
        <SectionImg
          title="Accessories"
          subtitle=""
          bgImage="/images/background/Homepage-Accessories-Desktop-NA-APAC.avif"
        />
      </div>
    </div>
  );
}
