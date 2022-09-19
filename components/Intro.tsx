import Hero from "@/ui/Hero";
import { ButtonLink } from "@taikai/rocket-kit";

const Intro = () => (
  <Hero>
    <h1>Bounty Network for Open-source Projects</h1>
    <p>
      Bepro Network is a decentralized marketplace and system that connects
      developers with operators or anyone looking to build open-source
      development projects.
    </p>
    <div>
      <ButtonLink
        color="blue500"
        url="#0"
        value="Launch your first bounty"
        icon="arrow-external"
      />
      <ButtonLink
        variant="outline"
        color="blue500"
        url="#0"
        value="Discover bounties"
        icon="arrow-external"
      />
    </div>
  </Hero>
);

export default Intro;
