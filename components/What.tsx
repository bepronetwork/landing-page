import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";
import { rem } from "polished";

const What = () => (
  <Section padding="xl">
    <ProductShot
      subheading="Decentralized platform"
      title="What is a bounty network?"
      imgSrc="/product-shot--what.svg"
      imgAlt="Bepro Network - Bounty product shot"
    >
      <p style={{ marginTop: rem("20px") }}>
        Bepro is a Bounty Network platform created to help organizations manage
        their decentralized development.
      </p>
      <p>
        We simplified the process of launching multiple development bounties,
        managing disputes and reward collaboration using tokens.
      </p>
    </ProductShot>
  </Section>
);

export default What;
