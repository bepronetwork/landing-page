import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Section from "@/ui/Section";
import PanelGrid from "@/ui/PanelGrid";
import Panel from "@/ui/Panel";
import PillTabs from "@/ui/PillTabs";
import { Bounty, Community, Reward, Find, Build, GetPaid } from "@/utils/icons";

const How = () => {
  const router = useRouter();
  const tabs = [{ label: "Organizations" }, { label: "Developers" }];
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const asPath = router.asPath;

    if (asPath === "/#org") {
      setTab(0);
    }

    if (asPath === "/#dev") {
      setTab(1);
    }
  }, [router.query, router.asPath]);

  return (
    <>
      <div id="org" className="sr-only" />
      <div id="dev" className="sr-only" />
      <Section
        subheading="Step by step"
        title="Decentralized development for everyone"
      >
        <PillTabs
          buttons={tabs}
          selectedTab={tab}
          handleClick={(index: number) => {
            setTab(index);
          }}
        />
        <PanelGrid>
          {tab === 0 && (
            <>
              <Panel color="blue" icon={<Bounty />} title="Submit a bounty">
                <p>Create, describe and allocate a reward for the task.</p>
              </Panel>
              <Panel
                color="blue"
                icon={<Community />}
                title="Work with the community"
              >
                <p>
                  Engage with your community and attract developers to build the
                  right solution for your project.
                </p>
              </Panel>
              <Panel color="blue" icon={<Reward />} title="Validate and reward">
                <p>
                  Review code, interact with devs, use the tokens of your
                  choosing and grow your ecosystem.
                </p>
              </Panel>
            </>
          )}

          {tab === 1 && (
            <>
              <Panel
                color="blue"
                icon={<Find />}
                title="Find bounties to work on"
              >
                <p>Explore and find the right bounties for you.</p>
              </Panel>
              <Panel color="blue" icon={<Build />} title="Start building">
                <p>
                  Work and collaborate with other developers and contribute to
                  open-source projects.
                </p>
              </Panel>
              <Panel color="blue" icon={<GetPaid />} title="Get paid">
                <p>
                  Once the code has been reviewed and accepted, you get paid in
                  crypto.
                </p>
              </Panel>
            </>
          )}
        </PanelGrid>
      </Section>
    </>
  );
};

export default How;
