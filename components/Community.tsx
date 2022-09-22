import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";
import { ButtonLink } from "@taikai/rocket-kit";

const Community = () => (
  <Section>
    <ProductShot
      subheading="Community"
      title="Join our Discord server and access exclusive community channels"
      imgSrc="/product-shot--discord.svg"
      imgAlt="Bepro Network - Discord"
    >
      <ButtonLink color="blue500" url="#0" value="Join our Discord" rounded />
    </ProductShot>
  </Section>
);

export default Community;
