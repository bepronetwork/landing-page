import * as Styles from "./styles";
import { NewsletterSubscriptionProps } from "./types";

const NewsletterSubscription = (props: NewsletterSubscriptionProps) => {
  const { subheading, title, description, children } = props;

  return (
    <Styles.Container>
      <Styles.Description>
        <span>{subheading}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </Styles.Description>
      <Styles.Field>
        <Styles.Input>{children}</Styles.Input>
      </Styles.Field>
    </Styles.Container>
  );
};

export default NewsletterSubscription;
