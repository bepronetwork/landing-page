import Link from "next/link";
import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";
import { Icon } from "@taikai/rocket-kit";

const CreateNetwork = () => (
  <Section
    title="How to create a custom network"
    subheading="For organizations"
  >
    <ProductShot
      title="Custom Network"
      imgSrc="/product-shot--custom-network.svg"
      imgAlt="Bepro Network - Custom network product shot"
      invert
    >
      <p>
        Any Organization, DAO, Layer 1 or Layer 2 protocols is able to launch
        their own Bounty Network using their own branding, token and community.
      </p>
      <Link href="#0">
        <a target="_blank" rel="">
          <span>Learn more</span> <Icon icon="arrowRight" />
        </a>
      </Link>
    </ProductShot>
    <ProductShot
      title="Use your $tokens"
      imgSrc="/product-shot--tokens.svg"
      imgAlt="Bepro Network - Your own tokens product shot"
    >
      <p>
        Create and manage bounties using your own token. Ability to use USDC or
        any other ERC-20 as the payment currency for Bounties.
      </p>
    </ProductShot>
    <ProductShot
      title="Delegate your power"
      imgSrc="/product-shot--delegate.svg"
      imgAlt="Bepro Network - Delegate product shot"
      invert
    >
      <p>
        Select your own curators or delegate it to the community to review and
        create proposals for Bounty distributions.
      </p>
    </ProductShot>
  </Section>
);

export default CreateNetwork;
