import { Button } from "@taikai/rocket-kit";
import Section from "@/ui/Section";
import NewsletterSubscription from "@/ui/NewsletterSubscription";

const Newsletter = () => {
  return (
    <Section>
      <NewsletterSubscription
        subheading="News and updates"
        title="Subscribe to our newsletter"
        description="Subscribe to stay tuned on the latest bounties, platform updates and ecosystem news."
      >
        <input
          type="emai"
          value={undefined}
          placeholder="name@email.com"
          onChange={() => {}}
          disabled={false}
        />
        <Button
          color="blue500"
          txtColor="white"
          type="submit"
          value="Subscribe"
          loading={false}
          disabled={false}
        />
      </NewsletterSubscription>
    </Section>
  );
};

export default Newsletter;
