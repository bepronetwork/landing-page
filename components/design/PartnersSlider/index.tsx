import Marquee from "react-fast-marquee";
import * as Styles from "./styles";
import { PartnersSliderProps } from "./types";

const PartnersSlider = (props: PartnersSliderProps) => {
  const { partners } = props;

  if (!partners) return <></>;

  return (
    <Styles.Slider>
      <Marquee gradient={false}>
        <ul>
          {partners.map((item, index) => (
            <li key={index}>{item.logo}</li>
          ))}
        </ul>
      </Marquee>
    </Styles.Slider>
  );
};

export default PartnersSlider;
