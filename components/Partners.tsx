import Section from "@/ui/Section";
import PartnersSlider from "@/ui/PartnersSlider";
import {
  Harmony,
  ETHFoundation,
  Aurora,
  CryptoCom,
  Solana,
  ProtocolLabs,
  Polkamarkets,
  Caduceus,
  RealFevr,
  Holon,
  Filecoin,
  UcoNetwork,
} from "@/utils/brands";
import { colors } from "@/styles/variables";

const Partners = () => {
  const logoFill = colors.grey700;

  const partners = [
    {
      logo: <ETHFoundation fill={logoFill} />,
      name: "ETH Foundation",
    },
    {
      logo: <CryptoCom fill={logoFill} />,
      name: "Crypto.com",
    },
    {
      logo: <Aurora fill={logoFill} />,
      name: "Aurora",
    },
    {
      logo: <Solana fill={logoFill} />,
      name: "Solana",
    },
    {
      logo: <Harmony fill={logoFill} />,
      name: "Harmony",
    },
    {
      logo: <ProtocolLabs fill={logoFill} />,
      name: "Protocol Labs",
    },
    {
      logo: <Polkamarkets fill={logoFill} />,
      name: "Polkamarkets",
    },
    {
      logo: <Caduceus fill={logoFill} />,
      name: "Caduceus",
    },
    {
      logo: <RealFevr fill={logoFill} />,
      name: "RealFevr",
    },
    {
      logo: <Holon fill={logoFill} />,
      name: "Holon",
    },
    {
      logo: <Filecoin fill={logoFill} />,
      name: "Filecoin",
    },
    {
      logo: <UcoNetwork fill={logoFill} />,
      name: "UCO Network",
    },
  ];

  return (
    <Section
      title="Powering the Web3 Ecosystem"
      subheading="Partners and clients"
      headerMargin="s"
      fullWidth
    >
      <PartnersSlider partners={partners} />
    </Section>
  );
};

export default Partners;
