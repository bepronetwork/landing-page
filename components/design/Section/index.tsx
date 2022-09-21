import * as Styles from "./styles";
import { SectionProps } from "./types";

const Section = (props: SectionProps) => {
  const { headerMargin = "l", subheading, title, children } = props;

  return (
    <Styles.Wrapper hasHeading={!!title} headerMargin={headerMargin}>
      <Styles.Container>
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
