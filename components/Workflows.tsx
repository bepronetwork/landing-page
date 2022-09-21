import { useState } from "react";
import Section from "@/ui/Section";
import PanelGrid from "@/ui/PanelGrid";
import Panel from "@/ui/Panel";
import PillTabs from "@/ui/PillTabs";
import { Bounty, Community, Reward, Find, Build, GetPaid } from "@/utils/icons";

const How = () => {
  const [tab, setTab] = useState(0);

  const tabs = [{ label: "Organizations" }, { label: "Developers" }];

  return (
    <Section subheading="Subheading" title="Workflows for different people">
      <PillTabs buttons={tabs} selectedTab={tab} handleClick={setTab} />
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
                Review code, interact with devs, use the tokens of your chosing
                and grow your ecosystem.
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
  );
};

export default How;
