import styled from "styled-components";
import { rem } from "polished";
import Section from "@/ui/Section";
import ProductShot from "@/ui/ProductShot";
import { ButtonLink } from "@taikai/rocket-kit";
import { useAnalytics } from "@/utils/analytics";

const CustomProductShot = styled.div`
  img {
    max-height: ${rem("400px")};
  }
`;

const Community = () => {
  const analytics = useAnalytics();

  return (
    <Section>
      <CustomProductShot>
        <ProductShot
          subheading="Community"
          title="Join our Discord server and access exclusive community channels"
          imgSrc="/product-shot--discord.svg"
          imgAlt="Bepro Network - Discord"
        >
          <ButtonLink
            color="blue500"
            url="https://discord.gg/9aUufhzhfm"
            value="Join our Discord"
            action={() => {
              analytics.pushEvent("discord_button");
            }}
            rounded
            blank
          />
        </ProductShot>
      </CustomProductShot>
    </Section>
  );
};

export default Community;
