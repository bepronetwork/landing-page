import * as Styles from "./styles";
import { HeroProps } from "./types";

const Hero = (props: HeroProps) => {
  const { children } = props;

  return (
    <Styles.Wrapper>
      <Styles.Container>{children}</Styles.Container>
      <img src={"/bepro-bounties.png"} alt="Bepro Network - Bounties Screen" />
    </Styles.Wrapper>
  );
};

export default Hero;
