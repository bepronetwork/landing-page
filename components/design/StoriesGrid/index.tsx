import * as Styles from "./styles";
import { StoriesGridProps } from "./types";

const StoriesGrid = (props: StoriesGridProps) => {
  const { children } = props;

  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};

export default StoriesGrid;
