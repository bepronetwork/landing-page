import Section from "@/ui/Section";
import FeaturedBounties from "@/ui/FeaturedBounties";
import { ButtonLink } from "@taikai/rocket-kit";
import { BountiesCarrousel } from "@/utils/ldjson";
import { bounties } from "@/utils/bounties";
import { useAnalytics } from "@/utils/analytics";

const Find = () => {
  const title = "Find a bounty to work on";
  const analytics = useAnalytics();

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
          action={() => {
            analytics.pushEvent({
              category: "engagement",
              action: "see-all-bounties-button",
              label: "see-all-bounties-button",
            });
          }}
          rounded
          blank
        />
      </Section>
    </>
  );
};

export default Find;
