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
import team from "../assets/team/team.png";
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
import { companyMembers } from "../helpers/CompanyMembers";
import { advisorsMembers } from "../helpers/AdvisorsMembers";

export default function About() {
  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const { getTotalDevelopers } = useApi();

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
    getTotalDevelopers().then((r) => setTotalDevelopers(r?.data));
  }

  useEffect(initialize);

  return (
    <>
      <Header />
      <div className="hero-about bg-blue mb-4">
        <div className="title mb-4">
          <h2 className="h2 text-white">
            We are building the future of work in web3
          </h2>
        </div>
        <div className="row g-0 justify-content-center">
          <div className="text-about col-md-6">
            <p>
              We want to change the way companies build products by
              decentralizing its development. In our platform, builders are able
              to work on a challenge-based opportunity, contributing for their
              favorite projects, for multiple organizations at the same time and
              getting rewarded for their individual contribution. And #bepro-js
              for a web3 SDK
            </p>
          </div>
          <div className="col-md-2 logo-taikei mt-4">
            <a target="_blank" href="https://taikai.network/en" rel="noreferrer">
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
          <div className="col-md-12">
            <a href="https://development.bepro.network" target="_blank" rel="noreferrer">
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
      <div className="row g-0 justify-content-center  text-center bg-shadow pb-2">
        <h3 className="h3 my-4">Co-Founders & Advisors</h3>
        <div className="text-advisors">
          <p className="p">
            Bepro Network started in 2018 as a SaaS Startup invested by
            traditional European VC and evolved into a Web3 code as a service
            protocol for decentralised systems tied to a toolkit for developers
            by developers, below you find the Co-Founders of Bepro Network Labs
            & TAIKAI continuing to help the mission to grow the Bepro Network
            Ecosystem.
          </p>
        </div>
        <div className="row w-65">
          {advisorsMembers.map((member, key) => (
            <div key={key} className={`col-md-4 my-3`}>
              <AdvisorMember member={member} />
            </div>
          ))}
        </div>
      </div>
      <div className="row g-0 align-items-center justify-content-center text-center pb-2">
        <h3 className="h3 my-4">Our amazing team</h3>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-50" src={team.src} alt="Team icon" />
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
            rel="noreferrer"
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
                <a target="_blank" href={investor.href} rel="noreferrer">
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
