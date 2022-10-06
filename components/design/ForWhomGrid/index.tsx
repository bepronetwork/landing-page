import * as Styles from "./styles";
import { ForWhomGridProps } from "./types";

const ForWhomGrid = (props: ForWhomGridProps) => {
  const { children } = props;
  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};

export default ForWhomGrid;
