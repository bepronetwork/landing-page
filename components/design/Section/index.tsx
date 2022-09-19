import * as Styles from "./styles";
import { SectionProps } from "./types";

const Section = (props: SectionProps) => {
  const { subheading, title, children } = props;

  return (
    <Styles.Wrapper hasHeading={!!title}>
      <Styles.Container>
        {title && (
          <Styles.Header>
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
