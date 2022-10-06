import Image from "next/image";
import * as Styles from "./styles";
import { HeroProps } from "./types";

const Hero = (props: HeroProps) => {
  const { children } = props;

  return (
    <Styles.Wrapper>
      <Styles.Container>{children}</Styles.Container>
      <Styles.Image>
        <Image
          layout="responsive"
          width={946}
          height={471}
          src="/bepro-bounties.svg"
          alt="Bepro Network - Bounties Screen"
        />
      </Styles.Image>
    </Styles.Wrapper>
  );
};

export default Hero;
