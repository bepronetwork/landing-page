import { useState } from "react";
import axios from "axios";
import { Button } from "@taikai/rocket-kit";
import Section from "@/ui/Section";
import NewsletterSubscription from "@/ui/NewsletterSubscription";
import { useAnalytics } from "@/utils/analytics";

const Newsletter = () => {
  const analytics = useAnalytics();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const isValidEmail = (email: string) => {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(email)) {
      setError(null);
      return true;
    }

    setError("You need to enter a valid email");
    return false;
  };

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      setLoading(true);

      axios
        .put("/api/sendgrid", {
          email,
        })
        .then((result) => {
          if (result.status === 200) {
            setLoading(false);
            setSubscribed(true);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(err.response.data.message);
        });

      analytics.pushEvent("newsletter_button");
    }
  };

  return (
    <Section>
      <NewsletterSubscription
        subheading="News and updates"
        title="Subscribe to our newsletter"
        description="Subscribe to stay tuned on the latest bounties, platform updates and ecosystem news."
      >
        <div>
          <input
            type="email"
            className={error ? "error" : undefined}
            placeholder="name@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);

              if (error) {
                isValidEmail(e.target.value);
              }
            }}
            disabled={loading || subscribed}
          />
          <Button
            className={error ? "error" : undefined}
            color={subscribed && !error ? "green500" : "blue500"}
            txtColor="white"
            icon={subscribed && !error ? "check" : undefined}
            value={subscribed && !error ? "Subscribed" : "Subscribe"}
            loading={loading}
            disabled={loading || subscribed}
            action={() => {
              handleSubmit();
            }}
          />
        </div>
        {error && <span>{error}</span>}
      </NewsletterSubscription>
    </Section>
  );
};

export default Newsletter;
