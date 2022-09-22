import { CustomNetworkProps } from "./types";
import * as Styles from "./styles";

const CustomNetwork = (props: CustomNetworkProps) => {
  const { title, subheading, children } = props;

  return (
    <Styles.Wrapper>
      <Styles.Content>
        <span>{title}</span>
        <h2>{subheading}</h2>
        {children}
      </Styles.Content>
    </Styles.Wrapper>
  );
};

export default CustomNetwork;
