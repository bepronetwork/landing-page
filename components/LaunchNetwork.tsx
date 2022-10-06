import { ButtonLink } from "@taikai/rocket-kit";
import Section from "@/ui/Section";
import CustomNetwork from "@/ui/CustomNetwork";
import { useAnalytics } from "@/utils/analytics";

const LaunchNetwork = () => {
  const analytics = useAnalytics();

  return (
    <Section padding="s">
      <CustomNetwork
        title="Customization"
        subheading="Launch your own bounty network"
        imgSrc="product-shot--launch-network.svg"
        imgAlt="Launch your own bounty network"
      >
        <p>
          Create bounties and have a Web3 developer community building the right
          solution for your projects. Our team is here for you!
        </p>
        <div>
          <ButtonLink
            color="blue500"
            url="https://development.bepro.network"
            value="Start building now"
            action={() => {
              analytics.pushEvent({
                category: "engagement",
                action: "start-building-button",
                label: "start-building-button",
              });
            }}
            rounded
            blank
          />
          <ButtonLink
            variant="outline"
            color="blue400"
            url="https://taikai.typeform.com/to/o31JUE8t"
            value="Talk with us for a demo"
            action={() => {
              analytics.pushEvent({
                category: "engagement",
                action: "demo-button",
                label: "demo-button",
              });
            }}
            rounded
            blank
          />
        </div>
      </CustomNetwork>
    </Section>
  );
};

export default LaunchNetwork;
