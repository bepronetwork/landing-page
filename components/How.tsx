import Section from "@/ui/Section";
import PanelGrid from "@/ui/PanelGrid";
import Panel from "@/ui/Panel";
import { GitHub, WebApp, Protocol } from "@/utils/icons";

const How = () => (
  <Section subheading="Framework" title="How it works" headerMargin="s">
    <p>
      Bepro Network operates as a payment and curation layer for GitHub
      repositories.
    </p>
    <p>
      Our protocol interacts with GitHub in order to function and to manage pull
      requests, issues and branches.
    </p>
    <h4>
      The decentralized framework is delivered by the following 3 main
      components
    </h4>
    <PanelGrid>
      <Panel
        icon={<GitHub />}
        title={
          <>
            <span>1.</span> GitHub Bot
          </>
        }
      >
        <p>
          That connects to all the Github repositories and manages integration
          between the protocol and promoter repositories.
        </p>
      </Panel>
      <Panel
        icon={<WebApp />}
        title={
          <>
            <span>2.</span> Web Application
          </>
        }
      >
        <p>
          To allow the bounty promoters to open bounties, lock tokens to be
          curators on the protocol, manage disputes, and reward distributions.
        </p>
      </Panel>
      <Panel
        icon={<Protocol />}
        title={
          <>
            <span>3.</span> Bepro Protocol
          </>
        }
      >
        <p>
          A smart contract deployed on the Bounty promoter EVM where all the
          dispute/settlement infrastructures are executed.
        </p>
      </Panel>
    </PanelGrid>
  </Section>
);

export default How;
