import Section from "@/ui/Section";
import AuditGrid from "@/ui/AuditGrid";
import { colors } from "@/styles/variables";
import { Hacken, Certik, Red4Sec } from "@/utils/brands";

const Audited = () => {
  const audits = [
    {
      url: "https://hacken.io/audits/#bepro",
      logo: <Hacken fill={colors.white} />,
      desc: "Security Audit",
    },
    {
      url: "https://certik.com/projects/bepro",
      logo: <Certik fill={colors.white} />,
      desc: "Security Audit",
    },
    {
      url: "https://red4sec.com",
      logo: <Red4Sec fill={colors.white} />,
      desc: "Security Audit",
    },
  ];

  return (
    <Section
      title="The most secure protocol for decentralized development"
      subheading="Audited and Verified"
    >
      <AuditGrid items={audits} />
    </Section>
  );
};

export default Audited;
