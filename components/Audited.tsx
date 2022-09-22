import Section from "@/ui/Section";
import AuditGrid from "@/ui/AuditGrid";
import { colors } from "@/styles/variables";
import { Bepro } from "@/utils/brands";

const Audited = () => {
  const audits = [
    {
      url: "#0",
      logo: <Bepro symbol={colors.white} lettering={colors.white} />,
      desc: "Secutiry Audit",
    },
    {
      url: "#0",
      logo: <Bepro symbol={colors.white} lettering={colors.white} />,
      desc: "Secutiry Audit",
    },
    {
      url: "#0",
      logo: <Bepro symbol={colors.white} lettering={colors.white} />,
      desc: "Secutiry Audit",
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
