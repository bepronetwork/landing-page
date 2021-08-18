import { GetStaticProps } from 'next'
import React from 'react'
import Footer from '../components/footer'


export default function About() {
  const appLink = process.env.NEXT_PUBLIC_APP_URL;
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
            <div className="col-md-3">
              <div className="about-people text-center">
                <div className="item">
                  <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc88d95f0f7f9cddc857e1_photo_2021-01-11_17-01-53.jpg" alt="" />
                  <h4 className="h4 text-white">Rui Teixeira</h4>
                  <p className="p-small">Co-founder</p>
                </div>
              </div>
            </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc89d582e1be72130745d6_Miguel%20Leite.jpeg" alt="" />
                <h4 className="h4 text-white">Miguel Leite</h4>
                <p className="p-small">Co-founder</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/5ffc895e40fb69e7645a805e_Profile%20Justin.jpg" alt="" />
                <h4 className="h4 text-white">Justin Wu</h4>
                <p className="p-small">Co-founder</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba47bab2c2d865dd8d23c1_Screenshot%202021-06-04%20at%2016.33.01.png" alt="" />
                <h4 className="h4 text-white">André Moniz</h4>
                <p className="p-small">Co-founder</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba445dd4bb805b68ad716f_Screenshot%202021-06-04%20at%2016.18.44.png" alt="" />
                <h4 className="h4 text-white">Filipe Pereira</h4>
                <p className="p-small">Chief of Inbound</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60bc972545cbc32c33aeb84f_Screenshot%202021-06-06%20at%2010.35.08-p-500.png" alt="" />
                <h4 className="h4 text-white">André Santos</h4>
                <p className="p-small">UX/UI Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60d4d7e58c9770649d8bc8c2_Screenshot%202021-06-24%20at%2020.07.09-p-500.png" alt="" />
                <h4 className="h4 text-white">Marcus Vinicius</h4>
                <p className="p-small">Front-End Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba44fb055eb6819dcc7eff_Screenshot%202021-06-04%20at%2016.21.23.png" alt="" />
                <h4 className="h4 text-white">Joao Victor</h4>
                <p className="p-small">Front-End Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60bc97fba05e6732771bcaa6_Screenshot%202021-06-06%20at%2010.39.23.png" alt="" />
                <h4 className="h4 text-white">André Gonçalves</h4>
                <p className="p-small">Javascript Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-people text-center">
              <div className="item">
                <img className="avatar" src="https://uploads-ssl.webflow.com/5fc917a738ff8f24bc5df94c/60ba47018b85e45e46b1d9c1_Screenshot%202021-06-04%20at%2016.29.39.png" alt="" />
                <h4 className="h4 text-white">Alvaro Nogueiras</h4>
                <p className="p-small">Advisor</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-people text-center">
              <div className="item">
                <h1 className="h1 text-white">+10 Devs</h1>
                <p className="p-small">Community Developers</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <Footer></Footer>

      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
