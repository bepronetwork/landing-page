import * as Styles from "./styles";
import { TextFormatterProps } from "./types";

const TextFormatter = (props: TextFormatterProps) => {
  const { children } = props;

  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};

export default TextFormatter;
