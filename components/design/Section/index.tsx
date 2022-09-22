import * as Styles from "./styles";
import { SectionProps } from "./types";

const Section = (props: SectionProps) => {
  const {
    fullWidth = false,
    padding = "l",
    headerMargin = "l",
    subheading,
    title,
    children,
  } = props;

  return (
    <Styles.Wrapper
      padding={padding}
      headerMargin={headerMargin}
      fullWidth={fullWidth}
    >
      <Styles.Container fullWidth={fullWidth}>
        {title && (
          <Styles.Header headerMargin={headerMargin}>
            <span>{subheading}</span>
            <h2>{title}</h2>
          </Styles.Header>
        )}
        {children}
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default Section;
