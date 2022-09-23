import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";

const CreateNetwork = () => (
  <Section
    title="How to participate in a Bounty"
    subheading="For developers and curators"
    lightOn
  >
    <ProductShot
      title="Get recognized for your work"
      imgSrc="/product-shot--recognized.svg"
      imgAlt="Bepro Network - Custom network product shot"
    >
      <p>
        All the contributors on a Bounty (developers and council members) will
        receive a non-transferable NFT as a recognition of their work.
      </p>
    </ProductShot>
    <ProductShot
      title="Take part in new projects"
      imgSrc="/product-shot--new-projects.svg"
      imgAlt="Bepro Network - Your own tokens product shot"
      invert
    >
      <p>Discover new projects to contribute to and get paid for your work.</p>
    </ProductShot>
    <ProductShot
      title="Curate the network"
      imgSrc="/product-shot--curate.svg"
      imgAlt="Bepro Network - Delegate product shot"
    >
      <p>
        Review proposals of Bounty payment distributions and curate the Bepro
        Network.
      </p>
    </ProductShot>
  </Section>
);

export default CreateNetwork;
