import * as Styles from "./styles";
import { PanelGridProps } from "./types";

const PanelGrid = (props: PanelGridProps) => {
  const { children } = props;

  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};

export default PanelGrid;
