import { Icon } from "@taikai/rocket-kit";
import * as Styles from "./styles";
import { PanelProps } from "./types";

const Panel = (props: PanelProps) => {
  const { color = "grey", icon = "notifications", title, children } = props;

  return (
    <Styles.Wrapper color={color}>
      <div>
        <Icon icon={icon} fill="#ffffff" />
      </div>
      <h3>{title}</h3>
      {children}
    </Styles.Wrapper>
  );
};

export default Panel;
