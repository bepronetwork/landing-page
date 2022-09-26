import * as Styles from "./styles";
import { ItemProps, PartnersSliderProps } from "./types";

const PartnersSlider = (props: PartnersSliderProps) => {
  const { partners, speed } = props;

  if (!partners) return <></>;

  return (
    <Styles.Slider speed={speed}>
      <ul>
        {partners.map((item: ItemProps, index: number) => (
          <li key={index}>{item.logo}</li>
        ))}
        {partners.map((item: any, index: number) => (
          <li key={index}>{item.logo}</li>
        ))}
      </ul>
    </Styles.Slider>
  );
};

export default PartnersSlider;
