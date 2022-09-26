import Section from "@/ui/Section";
import FeaturedBounties from "@/ui/FeaturedBounties";
import { ButtonLink } from "@taikai/rocket-kit";
import { BountiesCarrousel } from "@/utils/ldjson";
import { bounties } from "@/utils/bounties";

const Find = () => {
  const title = "Find a Bounty to work on";

  return (
    <>
      <BountiesCarrousel title={title} bounties={bounties} />
      <Section title={title} subheading="Featured bounties">
        <FeaturedBounties bounties={bounties} />
        <ButtonLink
          variant="outline"
          color="blue500"
          txtColor="white"
          url="https://development.bepro.network"
          value="See all bounties"
          rounded
          blank
        />
      </Section>
    </>
  );
};

export default Find;
