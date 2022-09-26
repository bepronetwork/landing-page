import getConfig from "next/config";
import Link from "next/link";
import Hero from "@/ui/Hero";
import { ButtonLink, Icon } from "@taikai/rocket-kit";

const Intro = () => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <Hero>
      <Link href="#0">
        <a target="_blank" rel="noopener noreferrer">
          <span className="status">New</span>
          <span className="version">
            Version {publicRuntimeConfig.webnetVersion} released
          </span>
          <Icon icon="arrowForward" />
        </a>
      </Link>
      <h1>Bounty Network for Open-source Projects</h1>
      <p>
        Bepro Network is a decentralized marketplace and system that connects
        developers with operators or anyone looking to build open-source
        development projects.
      </p>
      <div>
        <ButtonLink
          color="blue500"
          url="#0"
          value="Launch your first bounty"
          icon="arrow-external"
          iconPosition="right"
        />
        <ButtonLink
          variant="outline"
          color="blue500"
          url="#0"
          value="Discover bounties"
          icon="arrow-external"
          iconPosition="right"
        />
      </div>
    </Hero>
  );
};

export default Intro;
