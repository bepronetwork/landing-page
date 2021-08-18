import {GetStaticProps} from 'next'
import React, {useEffect, useState} from 'react'
import Footer from '../components/footer'
import GithubMicroService from '../services/github-microservice';
import CompanyMember from '../components/company-member';

const companyMember = (name = ``, position = ``, avatar = ``) => ({name, position, avatar});

export default function About() {
  const appLink = process.env.NEXT_PUBLIC_APP_URL;
  const [totalDevelopers, setTotalDevelopers] = useState(0);

  const companyMembers = [
    companyMember(`Rui Teixeira`, `Co-founder`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc88d95f0f7f9cddc857e1_photo_2021-01-11_17-01-53.jpg`),
    companyMember(`Miguel Leite`, `Co-founder`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc89d582e1be72130745d6_Miguel%20Leite.jpeg`),
    companyMember(`Justin Wu`, `Co-founder`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc895e40fb69e7645a805e_Profile%20Justin.jpg`),
    companyMember(`André Moniz`, `Co-founder`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba47bab2c2d865dd8d23c1_Screenshot%202021-06-04%20at%2016.33.01.png`),
    companyMember(`João (MoshMage) Gonçalves`, `Chief technology officer`, ``),
    companyMember(`Filipe Pereira`, `Chief of Inbound`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba445dd4bb805b68ad716f_Screenshot%202021-06-04%20at%2016.18.44.png`),
    companyMember(`André Santos`, `UX/UI Designer`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60bc972545cbc32c33aeb84f_Screenshot%202021-06-06%20at%2010.35.08-p-500.png`),
    companyMember(`Marcus Vinicius`, `Front-End Developer`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60d4d7e58c9770649d8bc8c2_Screenshot%202021-06-24%20at%2020.07.09-p-500.png`),
    companyMember(`Joao Victor`, `Front-End Developer`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba44fb055eb6819dcc7eff_Screenshot%202021-06-04%20at%2016.21.23.png`),
    companyMember(`André Gonçalves`, `Javascript Developer`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60bc97fba05e6732771bcaa6_Screenshot%202021-06-06%20at%2010.39.23.png`),
    companyMember(`Alvaro Nogueiras`, `Advisor`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba47018b85e45e46b1d9c1_Screenshot%202021-06-04%20at%2016.29.39.png`),
  ]

  function initialize() {

    GithubMicroService.getTotalDevelopers()
                      .then(r => setTotalDevelopers(r.data));
  }

  useEffect(initialize, [])

  return (
    <>
      <div className="main-nav d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <a href="/">
            <img
              className="logo"
              src="https://64.media.tumblr.com/3cf2d2b58643cb6f46b42a652771b73b/e8afc16b16e16514-bc/s250x400/191e77982d8901585030f596d3e90935d42099ed.png"
              alt=""
            />
          </a>
          <ul className="nav-links">
            <li><a href="https://docs.bepro.network/">Docs</a></li>
            <li><a href="/">Grant</a></li>
          </ul>
        </div>
        <div className="d-flex flex-row align-items-center">
          <a className="btn btn-md btn-white" href={appLink}>App</a>
        </div>
      </div>

      <div className="hero bg-blue text-center mb-4">
        <h1 className="h1 text-white">A team building code for the future of web3 decentralized development</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <h3 className="h3 mb-4">Team</h3>

          {companyMembers.map(member => <div className="col-md-3"><CompanyMember member={member}></CompanyMember></div>)}

          <div className="col-md-6">
            <div className="about-people text-center">
              <div className="item">
                <h1 className="h1 text-white">+{totalDevelopers} Devs</h1>
                <p className="p-small">Community Developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
