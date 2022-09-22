import Section from "@/ui/Section";
import FooterMenu from "@/ui/FooterMenu";

const Footer = () => {
  const links = [
    {
      title: "Company",
      links: [
        {
          value: "About us",
          url: "#0",
        },
        {
          value: "Careers",
          url: "#0",
        },
        {
          value: "Blog",
          url: "#0",
        },
        {
          value: "Roadmap",
          url: "#0",
        },
        {
          value: "Press Kit",
          url: "#0",
          external: true,
        },
      ],
    },
    {
      title: "Ecosystem",
      links: [
        {
          value: "Docs",
          url: "#0",
        },
        {
          value: "I am a developer",
          url: "#0",
        },
        {
          value: "I am a holder",
          url: "#0",
        },
        {
          value: "Open Grants",
          url: "#0",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          value: "Terms and Conditions",
          url: "#0",
        },
        {
          value: "Privacy Policy",
          url: "#0",
        },
        {
          value: "Cookies Policy",
          url: "#0",
          external: true,
        },
        {
          value: "Cookies Settings",
          url: "#0",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      links: [
        {
          value: "Tokenomics",
          url: "#0",
        },
        {
          value: "Knowledge Base",
          url: "#0",
          external: true,
        },
        {
          value: "Community FAQ",
          url: "#0",
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          value: "GitHub",
          url: "#0",
        },
        {
          value: "Discord",
          url: "#0",
        },
        {
          value: "Twitter",
          url: "#0",
          external: true,
        },
        {
          value: "LinkedIn",
          url: "#0",
          external: true,
        },
        {
          value: "YouTube",
          url: "#0",
          external: true,
        },
      ],
    },
  ];

  return (
    <Section padding="s">
      <FooterMenu
        links={links}
        copyright={["© ", new Date().getFullYear(), " All rights reserved"]}
      />
    </Section>
  );
};

export default Footer;
