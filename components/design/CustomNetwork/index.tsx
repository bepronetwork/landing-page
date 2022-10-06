import { CustomNetworkProps } from "./types";
import * as Styles from "./styles";

const CustomNetwork = (props: CustomNetworkProps) => {
  const { title, subheading, children, imgSrc, imgAlt } = props;

  return (
    <Styles.Wrapper imgSrc={imgSrc}>
      <Styles.Content>
        <span>{title}</span>
        <h2>{subheading}</h2>
        {children}
      </Styles.Content>
      <picture>
        <img src={imgSrc} alt={imgAlt} />
      </picture>
    </Styles.Wrapper>
  );
};

export default CustomNetwork;
