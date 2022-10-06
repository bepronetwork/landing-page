import getConfig from "next/config";
import Link from "next/link";
import Hero from "@/ui/Hero";
import { ButtonLink, Icon } from "@taikai/rocket-kit";
import { useAnalytics } from "@/utils/analytics";

const Intro = () => {
  const { publicRuntimeConfig } = getConfig();
  const analytics = useAnalytics();

  return (
    <Hero>
      <Link href="#0">
        <a target="_blank" rel="noopener noreferrer">
          <span className="status">New</span>
          <span className="version">
            Version {publicRuntimeConfig.webnetVersion} is live!
          </span>
          <Icon icon="arrowForward" />
        </a>
      </Link>
      <h1>Web3 bounty network for open-source development</h1>
      <p>
        Bepro Network is a bounty network created to help organizations manage
        their decentralized development. We simplified the process of launching
        multiple development bounties, managing disputes and reward
        collaboration using smart contracts to handle payments.
      </p>
      <div>
        <ButtonLink
          color="blue500"
          url="https://support.bepro.network/en/articles/5585715-how-to-open-an-issue"
          value="Launch your first bounty"
          icon="arrow-external"
          iconPosition="right"
          action={() => {
            analytics.pushEvent({
              category: "engagement",
              action: "launch-first-bounty-button",
              label: "launch-first-bounty-button",
            });
          }}
        />
        <ButtonLink
          variant="outline"
          color="blue500"
          url="https://development.bepro.network"
          value="Discover bounties"
          icon="arrow-external"
          iconPosition="right"
          action={() => {
            analytics.pushEvent({
              category: "engagement",
              action: "discover-bounties-button",
              label: "discover-bounties-button",
            });
          }}
        />
      </div>
    </Hero>
  );
};

export default Intro;
