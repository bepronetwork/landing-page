import {GetStaticProps} from 'next'
import React, {useEffect, useState} from 'react'
import Footer from '../components/footer'
import GithubMicroService from '../services/github-microservice';
import CompanyMember from '../components/company-member';
import {numberToUX} from '../helpers/NumberToUX';

import moshmageAvatar from '../assets/moshmage-avatar.jpg';
import luisClarkAvatar from '../assets/luisclark-avatar.jpg';
import joaoDavidAvatar from '../assets/joaodavid-avatar.png';
import rodrigoAvatar from '../assets/rodrigo-avatar.png';
import nunoCorreiaAvatar from '../assets/nuno-avatar.jpeg';
import Header from '../components/header';


const companyMember = (name = ``, position = ``, avatar: string|StaticImageData = ``, href = ``) => ({name, position, avatar, href});

export default function About() {
  const appLink = process.env.NEXT_PUBLIC_APP_URL;
  const [totalDevelopers, setTotalDevelopers] = useState(0);

  const companyMembers = [
    companyMember(`Rui Teixeira`, `Co-founder`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc88d95f0f7f9cddc857e1_photo_2021-01-11_17-01-53.jpg`, `https://twitter.com/ruipeeet`),
    companyMember(`Miguel Leite`, `Co-founder`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc89d582e1be72130745d6_Miguel%20Leite.jpeg`, `https://www.linkedin.com/in/miguelleite`),
    companyMember(`Justin Wu`, `Co-founder`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc895e40fb69e7645a805e_Profile%20Justin.jpg`, `https://twitter.com/theWUJustin`),
    companyMember(`André Moniz`, `Co-founder`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba47bab2c2d865dd8d23c1_Screenshot%202021-06-04%20at%2016.33.01.png`, `https://www.linkedin.com/in/andremoniz/`),
    companyMember(`João (MoshMage) Gonçalves`, `Chief Technology Officer`, moshmageAvatar, `https://www.linkedin.com/in/moshmage/`),
    companyMember(`Filipe Pereira`, ` Chief of Ecosystem Development`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba445dd4bb805b68ad716f_Screenshot%202021-06-04%20at%2016.18.44.png`, `https://www.linkedin.com/in/filipeappereira/`),
    companyMember(`André Santos`, `UX/UI Designer`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60bc972545cbc32c33aeb84f_Screenshot%202021-06-06%20at%2010.35.08-p-500.png`, `https://www.linkedin.com/in/andredbsantos`),
    companyMember(`Rodrigo Sousa`, `UX/UI Designer`, rodrigoAvatar, `https://www.linkedin.com/in/rodrigosous-a/`),
    companyMember(`Marcus Vinicius`, `Front-End Developer`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60d4d7e58c9770649d8bc8c2_Screenshot%202021-06-24%20at%2020.07.09-p-500.png`, `https://www.linkedin.com/in/marcus-vin%C3%ADcius-lima-santos/`),
    companyMember(`André Gonçalves`, `Javascript Developer`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60bc97fba05e6732771bcaa6_Screenshot%202021-06-06%20at%2010.39.23.png`, `https://www.linkedin.com/in/andrefcgoncalves/`),
    companyMember(`Joao David`, `Chief of Community`, joaoDavidAvatar, `https://linkedin.com/in/dindgeri`),
    companyMember(`Luis Clark`, `Javascript Developer`, luisClarkAvatar, `https://www.linkedin.com/in/joaoluisclark/`),
    companyMember(`Alvaro Nogueiras`, `Advisor`, `https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba47018b85e45e46b1d9c1_Screenshot%202021-06-04%20at%2016.29.39.png`, `https://www.linkedin.com/in/alvarogomeznog/`),
    companyMember(`Nuno Correia`, `Advisor`, nunoCorreiaAvatar, `https://www.linkedin.com/in/nuno-m-correia`),
  ]

  function initialize() {
    GithubMicroService.getTotalDevelopers()
                      .then(r => setTotalDevelopers(r.data));
  }

  useEffect(initialize, [])

  return (
    <>
      <Header />

      <div className="hero bg-blue text-center mb-4">
        <h1 className="h1 text-white">A team building code for the future of web3 decentralized development</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <h3 className="h3 mb-4">Team</h3>

          {companyMembers.map(member => <div className="col-md-3"><CompanyMember member={member} /></div>)}

          <div className="col-md-6">
            <a href="https://development.bepro.network" target="_blank">
              <div className="about-people text-center">
                <div className="item">
                  <h1 className="h1 text-white">+{numberToUX(totalDevelopers)} Members</h1>
                  <p className="p-small">Protocol Members</p>
                </div>
              </div>
            </a>
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
