import Section from "@/ui/Section";
import ForWhomGrid from "@/ui/ForWhomGrid";
import ForWhomItem from "@/ui/ForWhomItem";
import { Brackets, Crown } from "@/utils/icons";
import { useAnalytics } from "@/utils/analytics";

const ForWhom = () => {
  const analytics = useAnalytics();

  return (
    <Section>
      <ForWhomGrid>
        <ForWhomItem
          className="for-developers"
          icon={<Brackets />}
          subheading="For developers"
          title="Earn $tokens by solving bounties"
          url="#0"
          buttonLabel="Get started"
          action={() => {
            analytics.pushEvent({
              category: "engagement",
              action: "get-started-button",
              label: "get-started-button",
            });
          }}
        >
          <p>Discover new projects to contribute and get paid for your work.</p>
          <p>
            Connect with builders and other developers and trade your commits,
            review for rewards in $BEPRO, $USDC or other tokens.
          </p>
        </ForWhomItem>
        <ForWhomItem
          className="for-contributors"
          icon={<Crown />}
          subheading="For contributors"
          title="Contribute and get paid"
          url="#0"
          buttonLabel="How to contribute"
          action={() => {
            analytics.pushEvent({
              category: "engagement",
              action: "contribute-button",
              label: "contribute-button",
            });
          }}
        >
          <p>
            Create bounty distribution proposals and curate the Bepro Network.
          </p>
          <p>
            A curator is a protocol participant who submits a bounty
            distribution proposal to reward contributors in order to resolve an
            issue.
          </p>
        </ForWhomItem>
      </ForWhomGrid>
    </Section>
  );
};

export default ForWhom;
