import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import CompanyMember from "../components/company-member";
import { numberToUX } from "../helpers/NumberToUX";
import Header from "../components/header";
import AdvisorMember from "../components/advisor-member";
import Button from "../components/button";
import useApi from "../x-hooks/use-api";
//images
import alvaroAvatar from "../assets/advisors/alvaro-avatar.png";
import andreAvatar from "../assets/advisors/andre-avatar.png";
import justinAvatar from "../assets/team/justin-avatar.png";
import miguelAvatar from "../assets/advisors/miguel-avatar.png";
import nunoAvatar from "../assets/advisors/nuno-avatar.png";
import ruiAvatar from "../assets/team/rui-avatar.png";
import team from "../assets/team/team.png";
import moshmageAvatar from "../assets/team/moshmage-avatar.jpg";
import andersonAvatar from "../assets/team/anderson-avatar.png";
import andreSantosAvatar from "../assets/team/andreSantos-avatar.png";
import andreGoncalvesAvatar from "../assets/team/andreGoncalves-avatar.png";
import carlosAvatar from "../assets/team/carlos-avatar.png";
import josemarAvatar from "../assets/team/Josemar-avatar.png";
import diogoAvatar from "../assets/team/diogo-avatar.png";
import filipeAvatar from "../assets/team/filipe-avatar.png";
import helderAvatar from "../assets/team/helder-avatar.png";
import henriqueAvatar from "../assets/team/henrique-avatar.png";
import inesAvatar from "../assets/team/ines-avatar.png";
import joaoAvatar from "../assets/team/joao-avatar.png";
import luisAvatar from "../assets/team/luis-avatar.png";
import marcusAvatar from "../assets/team/marcus-avatar.png";
import mariaAvatar from "../assets/team/maria-avatar.png";
import marioAvatar from "../assets/team/mario-avatar.png";
import rodrigoNogueiraAvatar from "../assets/team/rodrigoNogueira-avatar.png";
import rodrigoSousaAvatar from "../assets/team/rodrigoSousa-avatar.png";
import rubhanAvatar from "../assets/team/rubhan-avatar.png";
import vitorAvatar from "../assets/team/vitor-avatar.png";
//icons
import TaikaiIcon from "../assets/icons/taikai-icon";
import ExternallinkIcon from "../assets/icons/externallink-icon";
import UtrustIcon from "../assets/icons/utrust-icon";
import ShillingIcon from "../assets/icons/shilling-icon";
import ByndIcon from "../assets/icons/bynd-icon";
import PtVenturesIcon from "../assets/icons/pt-ventures-icon";
import BrpxIcon from "../assets/icons/brpx-icon";
import C3Icon from "../assets/icons/c3-icon";
import CleverIcon from "../assets/icons/clever-icon";

const member = (
  name = ``,
  position = ``,
  avatar: string | StaticImageData = ``,
  href = ``
) => ({ name, position, avatar, href });

export default function About() {
  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const { getTotalDevelopers } = useApi();

  const companyMembers = [
    member(
      `Mário Alves`,
      `CEO`,
      marioAvatar,
      `https://www.linkedin.com/in/marioribeiroalves/`
    ),
    member(
      `Hélder Vasconcelos`,
      `CTO`,
      helderAvatar,
      `https://www.linkedin.com/in/heldervasc/`
    ),
    member(
      `Henrique Macedo`,
      `Head of Product`,
      henriqueAvatar,
      `https://www.linkedin.com/in/henrikemacedo/`
    ),
    member(
      `João Gonçalves`,
      `Head of Development`,
      moshmageAvatar,
      `https://www.linkedin.com/in/moshmage/`
    ),
    member(
      `Filipe Pereira`,
      `Head of Ecosystem`,
      filipeAvatar,
      `https://www.linkedin.com/in/filipeappereira/`
    ),
    member(
      `Rui Teixeira`,
      `Head of Technology Architecture`,
      ruiAvatar,
      `https://www.linkedin.com/in/rui-dos-santos-teixeira`
    ),
    member(
      `Maria Rincón`,
      `Head of Business Development`,
      mariaAvatar,
      `https://www.linkedin.com/in/maria-lucia-rincón-silva-b74b02129/`
    ),
    member(
      `Diogo Ferreira Pinto`,
      `Head of Customer Experience`,
      diogoAvatar,
      `https://www.linkedin.com/in/diogoferreirapinto/`
    ),
    member(
      `Justin Wu`,
      `Head of Partnerships`,
      justinAvatar,
      `https://twitter.com/theWUJustin`
    ),
    member(
      `Rodrigo Nogueira`,
      `Head of Marketing and Growth`,
      rodrigoNogueiraAvatar,
      `https://www.linkedin.com/in/rodrigornc/`
    ),
    member(
      `Joao David`,
      `Head of Community`,
      joaoAvatar,
      `https://linkedin.com/in/dindgeri`
    ),
    member(
      `Rubhan Sukin`,
      `International Business Development`,
      rubhanAvatar,
      `https://www.linkedin.com/in/rubhansukin/`
    ),
    member(
      `Carlos Mendes`,
      `Content Marketing Specialist`,
      carlosAvatar,
      `https://www.linkedin.com/in/carlos-mendes93/`
    ),
    member(
      `Josemar C. Hebo`,
      `Backend Developer`,
      josemarAvatar,
      `https://www.linkedin.com/in/josemar-c-hebo-2125b8147/`
    ),
    member(
      `Anderson Kabuya Lando`,
      `Frontend Developer`,
      andersonAvatar,
      `https://www.linkedin.com/in/anderson-kabuya-lando/`
    ),
    member(
      `Luis Clark`,
      `Frontend Developer`,
      luisAvatar,
      `https://www.linkedin.com/in/joaoluisclark/`
    ),
    member(
      `Marcus Vinicius`,
      `Frontend Developer`,
      marcusAvatar,
      `https://www.linkedin.com/in/marcus-vin%C3%ADcius-lima-santos/`
    ),
    member(
      `Vitor Hugo`,
      `Frontend Developer`,
      vitorAvatar,
      `https://www.linkedin.com/in/vhcsilva/`
    ),
    member(
      `André Gonçalves`,
      `Infrastructure`,
      andreGoncalvesAvatar,
      `https://www.linkedin.com/in/andrefcgoncalves/`
    ),
    member(
      `André Santos`,
      `Product Designer`,
      andreSantosAvatar,
      `https://www.linkedin.com/in/andredbsantos`
    ),
    member(
      `Rodrigo Sousa`,
      `Product Designer`,
      rodrigoSousaAvatar,
      `https://www.linkedin.com/in/rodrigosous-a/`
    ),
    member(
      `Inês Durão`,
      `Graphic Designer`,
      inesAvatar,
      `https://www.linkedin.com/in/ines-durao/`
    ),
  ];

  const advisorsMembers = [
    member(
      `Alvaro Nogueiras`,
      `Co-founder`,
      alvaroAvatar,
      `https://www.linkedin.com/in/alvarogomeznog/`
    ),
    member(
      `André Moniz`,
      `Co-founder`,
      andreAvatar,
      `https://www.linkedin.com/in/andremoniz/`
    ),
    member(
      `Miguel Leite`,
      `Chief Technology Officer`,
      miguelAvatar,
      `https://www.linkedin.com/in/miguelleite`
    ),
    member(
      `Nuno Correria`,
      ` Chief of Ecosystem Development`,
      nunoAvatar,
      `https://www.linkedin.com/in/nuno-m-correia`
    ),
  ];

  const investors: {
    icon: JSX.Element;
    href: string;
    style: string;
  }[] = [
    {
      icon: <C3Icon />,
      href: "https://www.c3-management.com/",
      style: "me-3",
    },
    {
      icon: <BrpxIcon />,
      href: "https://brpx.com/",
      style: "mx-3",
    },
    {
      icon: <PtVenturesIcon />,
      href: "https://www.portugalventures.pt/en/portfolio/",
      style: "mx-3",
    },
    {
      icon: <ByndIcon width={"86px"} height={"40px"} />,
      href: "https://www.bynd.vc/en/portfolio",
      style: "mx-3",
    },
    {
      icon: <ShillingIcon width={"164px"} height={"30px"} />,
      href: "https://www.shilling.vc",
      style: "mx-3",
    },
    {
      icon: <UtrustIcon width={"129px"} height={"60px"} />,
      href: "http://utrust.com",
      style: "mx-3",
    },
    {
      icon: <CleverIcon />,
      href: "https://cleveradvertising.com/",
      style: "ms-3",
    },
  ];

  function initialize() {
    getTotalDevelopers().then((r) => setTotalDevelopers(r.data));
  }

  useEffect(initialize, []);

  return (
    <>
      <Header />
      <div className="hero-about bg-blue mb-4">
        <div className="title mb-4">
          <h2 className="h2 text-white">We are building the future of work</h2>
        </div>
        <div className="row g-0 justify-content-center">
          <div className="text-about col-md-6">
            <p>
              We want to change the way companies build products by
              decentralizing its development. In our platform, builders are able
              to work on a challenge-based opportunity, contributing for their
              favorite projects, for multiple organizations at the same time and
              getting rewarded for their individual contribution.
            </p>
          </div>
          <div className="col-md-2 logo-taikei mt-4">
            <a target="_blank" href="https://taikai.network/en">
              <TaikaiIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center text-center">
          {companyMembers.map((member, key) => (
            <div key={key} className="col-md-3">
              <CompanyMember member={member} />
            </div>
          ))}
          <div className="col-md-6">
            <a href="https://development.bepro.network" target="_blank">
              <div className="about-people text-center">
                <div className="item">
                  <h1 className="h1 text-white">
                    +{numberToUX(totalDevelopers)}
                  </h1>
                  <p className="p-small">Protocol Members</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="row g-0 justify-content-center text-center bg-shadow pb-2">
        <h3 className="h3 my-4">Co-Founders & Advisors</h3>
        <div className="text-advisors">
          <p className="p">
            Bepro Network started in 2018 as a SaaS Startup invested by
            traditional European VC and evolved into a Web3 code as a service
            protocol for decentralised systems tied to a toolkit for developers
            by developers, below you find the founders of Bepro Network Labs
            which are now TAIKAI's Advisors continuing to help the mission to
            grow the Bepro Network Ecosystem.
          </p>
        </div>
        {advisorsMembers.map((member, key) => (
          <div key={key} className="col-md-2 my-3">
            <AdvisorMember member={member} />
          </div>
        ))}
      </div>
      <div className="row g-0 align-items-center justify-content-center text-center pb-2">
        <h3 className="h3 my-4">Our amazing team</h3>
        <div>
          <img className="w-50" src={team.src} />
        </div>

        <h2 className="h2 mt-3">We are hiring!</h2>
        <p className="smallCaptionGrotesk color-gray">
          Build the #future of web3 with us.
        </p>
        <div className="d-flex justify-content-center flex-wrap mb-4">
          <a
            className="text-decoration-none"
            href="https://taikai.network/en/careers"
            target="_blank"
          >
            <Button color="primary">
              Careers{" "}
              <ExternallinkIcon className="ms-2" width={12} height={12} />
            </Button>
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between flex-column bg-shadow pb-2">
          <h3 className="h3 mt-4">Investors</h3>
          <div className="logos-investors">
            {investors.map((investor, key) => (
              <div
                key={key}
                className={`logo-wrap wrap-small ${investor.style}`}
              >
                <a target="_blank" href={investor.href}>
                  {investor.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
