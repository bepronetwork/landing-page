import * as Styles from "./styles";
import { PanelProps } from "./types";

const Panel = (props: PanelProps) => {
  const { color = "grey", icon, title, children } = props;

  return (
    <Styles.Wrapper color={color}>
      <div>{icon}</div>
      <h3>{title}</h3>
      {children}
    </Styles.Wrapper>
  );
};

export default Panel;
