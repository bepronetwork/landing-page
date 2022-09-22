import Section from "@/ui/Section";
import ForWhomGrid from "@/ui/ForWhomGrid";
import ForWhomItem from "@/ui/ForWhomItem";
import { Brackets, Crown } from "@/utils/icons";

const ForWhom = () => {
  return (
    <Section>
      <ForWhomGrid>
        <ForWhomItem
          className="for-developers"
          icon={<Brackets />}
          subheading="For developers"
          title="Earn $tokens by solving Bounties"
          url="#0"
          buttonLabel="Get started"
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
