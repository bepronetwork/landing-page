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
      <h1>Web3 bounty network for open-source development</h1>
      <p>
        Bepro is a bounty network created to help organizations manage their
        decentralized development. We simplified the process of launching
        multiple development bounties, managing disputes and reward
        collaboration using smart contracts to handle payments.
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
