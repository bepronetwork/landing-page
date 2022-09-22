import Section from "@/ui/Section";
import FeaturedBounties from "@/ui/FeaturedBounties";
import { ButtonLink } from "@taikai/rocket-kit";

const Find = () => {
  const bounties = [
    {
      network: "BEPRO Network",
      status: "open",
      description: "Create a NFT Market Place",
      prize: 22000,
      currency: "$USDC",
      url: "#0",
    },
    {
      network: "BEPRO Network",
      status: "funding",
      description:
        "Remove all getContract functions from Application and instead do this and that and this and that",
      prize: 133000,
      currency: "$BEPRO",
      url: "#0",
    },
    {
      network: "BEPRO Network",
      status: "open",
      description: "Et irure mollit dolor aliqua elit velit qui ad ut.",
      prize: 40000,
      currency: "$AURORA",
      url: "#0",
    },
    {
      network: "BEPRO Network",
      status: "proposal",
      description: "Do this and that.",
      prize: 8000,
      currency: "$CELO",
      url: "#0",
    },
  ];

  return (
    <Section title="Find a Bounty to work on" subheading="Featured bounties">
      <FeaturedBounties bounties={bounties} />
      <ButtonLink
        variant="outline"
        color="blue500"
        txtColor="white"
        url="#0"
        value="See all bounties"
        rounded
      />
    </Section>
  );
};

export default Find;
