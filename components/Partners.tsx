import Section from "@/ui/Section";
import PartnersSlider from "@/ui/PartnersSlider";
import {
  Nissan,
  Microsoft,
  Pfizer,
  EuropeanCommission,
  Hilti,
  Altran,
  Outsystems,
  Nos,
  Ctt,
  Edp,
  Sonae,
  CalousteGulbenkian,
  NordicInnovation,
  TikTok,
  Harmony,
  ETHFoundation,
  Telos,
  Galp,
  Aurora,
} from "@/utils/brands";
import { colors } from "@/styles/variables";

const Partners = () => {
  const logoFill = colors.grey700;

  const partners = [
    {
      logo: <Microsoft fill={logoFill} />,
      name: "Microsoft",
    },
    {
      logo: <TikTok fill={logoFill} />,
      name: "TikTok",
    },
    {
      logo: <Pfizer fill={logoFill} />,
      name: "Pfizer",
    },
    {
      logo: <ETHFoundation fill={logoFill} />,
      name: "ETH Foundation",
    },
    {
      logo: <Aurora fill={logoFill} />,
      name: "Aurora",
    },
    {
      logo: <Telos fill={logoFill} />,
      name: "Telos",
    },
    {
      logo: <Harmony fill={logoFill} />,
      name: "Harmony",
    },
    {
      logo: <Nissan fill={logoFill} />,
      name: "Nissan",
    },
    {
      logo: <EuropeanCommission fill={logoFill} />,
      name: "European Commission",
    },
    {
      logo: <Hilti fill={logoFill} />,
      name: "Hilti",
    },
    {
      logo: <Altran fill={logoFill} />,
      name: "Altran",
    },
    {
      logo: <Galp fill={logoFill} />,
      name: "Galp",
    },
    {
      logo: <Outsystems fill={logoFill} />,
      name: "OutSystems",
    },
    {
      logo: <Nos fill={logoFill} />,
      name: "NOS",
    },
    {
      logo: <Ctt fill={logoFill} />,
      name: "CTT",
    },
    {
      logo: <Edp fill={logoFill} />,
      name: "EDP",
    },
    {
      logo: <Sonae fill={logoFill} />,
      name: "Sonae",
    },
    {
      logo: <CalousteGulbenkian fill={logoFill} />,
      name: "Fundação Calouste Gulbenkian",
    },
    {
      logo: <NordicInnovation fill={logoFill} />,
      name: "Nordic Innovation",
    },
  ];

  return (
    <Section
      title="Powering the Web3 Ecosystem"
      subheading="Partners and clients"
      headerMargin="s"
      fullWidth
    >
      <PartnersSlider partners={partners} speed={60} />
    </Section>
  );
};

export default Partners;
