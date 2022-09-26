import Section from "@/ui/Section";
import AuditGrid from "@/ui/AuditGrid";
import { colors } from "@/styles/variables";
import { Bepro, Hacken, Certik } from "@/utils/brands";

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
      url: "#0",
      logo: <Bepro symbol={colors.white} lettering={colors.white} />,
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
