import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";

const CreateNetwork = () => (
  <Section
    title="Create a custom bounty network"
    subheading="For organizations"
    lightOn
  >
    <ProductShot
      title="Custom Network"
      imgSrc="/product-shot--custom-network.svg"
      imgAlt="Bepro Network - Custom network product shot"
      invert
    >
      <p>
        Any Organization, DAO, Layer 1 or Layer 2 protocols is able to launch
        their own bounty network using their own branding, token and community.
      </p>
    </ProductShot>
    <ProductShot
      title="Reward with your $token"
      imgSrc="/product-shot--tokens.svg"
      imgAlt="Bepro Network - Your own tokens product shot"
    >
      <p>
        Create and manage bounties using your own token. Ability to use USDC or
        any other ERC-20 as the payment currency for Bounties.
      </p>
    </ProductShot>
    <ProductShot
      title="Power to the community"
      imgSrc="/product-shot--delegate.svg"
      imgAlt="Bepro Network - Delegate product shot"
      invert
    >
      <p>
        Select your own curators or delegate it to the community to review and
        create proposals for bounty distributions.
      </p>
    </ProductShot>
  </Section>
);

export default CreateNetwork;
