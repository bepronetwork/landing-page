import Section from "@/ui/Section";
import FeaturedBounties from "@/ui/FeaturedBounties";
import { ButtonLink } from "@taikai/rocket-kit";

const Find = () => {
  const bounties = [
    {
      network: "Bepro Network",
      status: "open",
      description: "Create a NFT Market Place",
      prize: 22000,
      currency: "$USDC",
      currencyColor: "#4250e4",
      url: "#0",
    },
    {
      network: "Bepro Network",
      status: "funding",
      description:
        "Remove all getContract functions from Application and instead do this and that and this and that",
      prize: 133000,
      currency: "$BEPRO",
      currencyColor: "#4250e4",
      url: "#0",
    },
    {
      network: "Bepro Network",
      status: "open",
      description: "Et irure mollit dolor aliqua elit velit qui ad ut.",
      prize: 40000,
      currency: "$AURORA",
      currencyColor: "#4250e4",
      url: "#0",
    },
    {
      network: "Bepro Network",
      status: "proposal",
      description: "Do this and that.",
      prize: 8000,
      currency: "$CELO",
      currencyColor: "#4250e4",
      url: "#0",
    },
  ];

  return (
    <Section title="Find a Bounty to work on" subheading="Featured bounties">
      <FeaturedBounties bounties={bounties} />
      <ButtonLink
        variant="outline"
        color="purple500"
        txtColor="white"
        url="#0"
        value="See all bounties"
        icon="arrow-external"
        iconPosition="right"
      />
    </Section>
  );
};

export default Find;
