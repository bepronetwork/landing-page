import { ButtonLink } from "@taikai/rocket-kit";
import Section from "@/ui/Section";
import CustomNetwork from "@/ui/CustomNetwork";

const LaunchNetwork = () => {
  return (
    <Section padding="s">
      <CustomNetwork
        title="Customization"
        subheading="Launch your own Bounty Network"
      >
        <p>
          Create bounties and have a Web3 developer community building the right
          solution for your projects. Our team is here for you!
        </p>

        <div>
          <ButtonLink
            color="blue500"
            url="#0"
            value="Start building now"
            rounded
          />
          <ButtonLink
            variant="outline"
            color="blue400"
            url="#0"
            value="Talk with us for a demo"
            rounded
          />
        </div>
      </CustomNetwork>
    </Section>
  );
};

export default LaunchNetwork;
