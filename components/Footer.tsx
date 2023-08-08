import Section from "@/ui/Section";
import FooterMenu from "@/ui/FooterMenu";

const Footer = () => {
  const links = [
    {
      title: "Company",
      links: [
        {
          value: "About us",
          url: "https://taikai.network/about-us",
          external: true,
        },
        {
          value: "Careers",
          url: "https://taikai.network/careers",
          external: true,
        },
        {
          value: "Blog",
          url: "https://blog.bepro.network",
          external: true,
        },
        {
          value: "Blog RSS Feed",
          url: "https://bepro.network/blog/rss",
          external: true,
        },
        {
          value: "Roadmap",
          url: "https://layerxlabs.notion.site/8c8fef2ea0a14e50bb254ee16a8c15e4?v=98c43e733f04481d83f0e1a075fe24ac",
          external: true,
        },
        {
          value: "Press Kit",
          url: "https://layerxlabs.notion.site/Bepro-Network-Community-Press-Kit-4dd9c5f6d968444fb2ffd55d85617a71",
          external: true,
        },
      ],
    },
    {
      title: "Ecosystem",
      links: [
        {
          value: "Docs",
          url: "https://support.bepro.network",
          external: true,
        },
        {
          value: "I am a developer",
          url: "https://support.bepro.network/en/collections/3680434-developers",
          external: true,
        },
        {
          value: "I am a holder",
          url: "https://support.bepro.network/en/collections/3680436-bepro-holder",
          external: true,
        },
        {
          value: "Open Grants",
          url: "https://github.com/bepronetwork/grants-program",
          external: true,
        },
        {
          value: "Bepro Network v1",
          url: "https://development.bepro.network",
          external: true,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          value: "Terms and Conditions",
          url: "/terms",
        },
        {
          value: "Privacy Policy",
          url: "https://taikai.network/privacy",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      links: [
        {
          value: "Tokenomics",
          url: "https://support.bepro.network/en/articles/6664430-bepro-tokenomics-distribution-schedule",
          external: true,
        },
        {
          value: "Knowledge Base",
          url: "http://support.bepro.network",
          external: true,
        },
        {
          value: "Community FAQ",
          url: "https://support.bepro.network/en/collections/3680438-community",
          external: true,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          value: "GitHub",
          url: "https://github.com/layerx-labs",
          external: true,
        },
        {
          value: "Discord",
          url: "https://discord.gg/layerx",
          external: true,
        },
        {
          value: "Twitter",
          url: "https://twitter.com/bepronet",
          external: true,
        },
        {
          value: "LinkedIn",
          url: "https://linkedin.com/company/bepronet",
          external: true,
        },
        {
          value: "YouTube",
          url: "https://youtube.com/c/BEPRONetwork",
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
