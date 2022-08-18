import { GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import Footer from '../components/footer'
import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import Header from '../components/header';
import {numberToUX} from '../helpers/NumberToUX';
import BlockgroundIcon from '../assets/icons/blockground-icon';
import CmsIcon from '../assets/icons/cms-icon';
import GanexaIcon from '../assets/icons/ganexa-icon';
import UtrustIcon from '../assets/icons/utrust-icon';
import ShillingIcon from '../assets/icons/shilling-icon';
import ByndIcon from '../assets/icons/bynd-icon';
import CompeteIcon from '../assets/icons/compete-icon';
import NgcIcon from '../assets/icons/ngc-icon';
import {BeproService} from '../services/bepro';
import useApi from '../x-hooks/use-api';
import Embed from '../components/embed';
import { StakingContractCode } from '../helpers/runkit';

ChartJS.register([CategoryScale, LinearScale, PointElement, LineElement]);

export default function Home() {
  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const [inProgress, setInProgress] = useState(0)
  const [beproStaked, setBeproStaked] = useState(0)
  const [onNetwork, setOnNetwork] = useState(0)
  const { getTotalDevelopers } = useApi()
 
  function initialize() {
    BeproService._network.start().then(() => {
      BeproService.getOpenIssues().then(setInProgress);
      BeproService.getTokensStaked().then(setOnNetwork);
      BeproService.getBEPROStaked().then(setBeproStaked);
    });

    getTotalDevelopers()
      .then((r) => {
        setTotalDevelopers(r?.data || 0);
      })
      .catch((err) => console.log("err get", err));
  }

  useEffect(initialize)

  return (
      <>
        <Header />

        <div className="landing-hero bg-blue d-flex justify-content-center text-center">
          <div>
            <h1 className="h2 color-white ml-2 mr-2">Autonomous Protocol for Decentralized Development</h1>

            <div className="rotator-wrapper d-none d-sm-block">
              <p className="p-big color-white">Use bepro.network to&nbsp;
                <span className="rotator">
                  <span>build your dApp</span>
                  <span>decentralize development</span>
                  <span>develop & get paid fairly</span>
                  <span>curate & earn rewards</span>
                </span>
              </p>
            </div>
          </div>

          <div className="slides">
            <div className="d-flex justify-content-end my-3 mx-4 px-sm-5">
              <span className="smallCaption text-white">BUILDERS & CONTRIBUTORS</span>
            </div>
            {/* To add new logos on slide-3 and slide-4 you need to update the logo counter on styles.scss */}
            <div className="slide-3">
              <a target="_blank" href="https://trustfi.org/" rel="noreferrer">
                <div className="slide-item log-6"></div>
              </a>
              <a target="_blank" href="https://www.polkamarkets.com/" rel="noreferrer">
                <div className="slide-item log-7"></div>
              </a>
              <a target="_blank" href="https://www.realfevr.com/" rel="noreferrer">
                <div className="slide-item log-4"></div>
              </a>
              <a target="_blank" href="https://royale.finance/" rel="noreferrer">
                <div className="slide-item log-16"></div>
              </a>
              <a target="_blank" href="https://www.exeedme.com/" rel="noreferrer">
                <div className="slide-item log-5"></div>
              </a>
              <a target="_blank" href="https://www.punkskinsociety.com/" rel="noreferrer">
                <div className="slide-item log-3"></div>
              </a>
              <a target="_blank" href="https://www.un1ke.io/" rel="noreferrer">
                <div className="slide-item log-2"></div>
              </a>
              <a target="_blank" href="https://www.ondastudio.co/" rel="noreferrer">
                <div className="slide-item log-21"></div>
              </a>
              <a target="_blank" href="https://thecodingmachine.com/" rel="noreferrer">
                <div className="slide-item log-19"></div>
              </a>
              <a target="_blank" href="https://www.nftsee.io/" rel="noreferrer">
                <div className="slide-item log-1"></div>
              </a>
              <a target="_blank" href="https://worldbox.tv/" rel="noreferrer">
                <div className="slide-item log-18"></div>
              </a>
            </div>
            <div className="slide-4">
              <a target="_blank" href="https://www.clashcardschampions.net/" rel="noreferrer">
                <div className="slide-item log-17"></div>
              </a>
              <a target="_blank" href="https://lepricon.io/" rel="noreferrer">
                <div className="slide-item log-8"></div>
              </a>
              <a target="_blank" href="https://www.uzyth.com/" rel="noreferrer">
                <div className="slide-item log-15"></div>
              </a>
              <a target="_blank" href="https://crypto.com/" rel="noreferrer">
                <div className="slide-item log-12"></div>
              </a>
              <a target="_blank" href="https://cleveradvertising.com/" rel="noreferrer">
                <div className="slide-item log-14"></div>
              </a>
              <a target="_blank" href="https://liveduel.com/future/" rel="noreferrer">
                <div className="slide-item log-10"></div>
              </a>
              <a target="_blank" href="https://subvisual.com/" rel="noreferrer">
                <div className="slide-item log-20"></div>
              </a>
              <a target="_blank" href="https://project.rally-tascos.com/" rel="noreferrer">
                <div className="slide-item log-13"></div>
              </a>
                <a target="_blank" href="https://dotmoovs.com/" rel="noreferrer">
                <div className="slide-item log-9"></div>
              </a>
                <a target="_blank" href="https://uco.network/" rel="noreferrer">
                <div className="slide-item log-11"></div>
              </a>
              <a target="_blank" href="https://www.theopendao.com/" rel="noreferrer">
                <div className="slide-item log-22"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex bg-blue align-items-center justify-content-between cols">
          <div className="col-content">
          <div className="d-flex flex-row mb-3 align-items-center">
              <p className="smallCaption color-white mb-0">Co-financed by</p>
              <span className="backed-logos mx-2 compete-2020"></span>
            </div>
            <h1 className="h1 color-white">Welcome to <br />Bepro Network</h1>
          </div>
          <div className="col-content bg-shade">
            <p className="smallCaption">Build the future of Web3</p>
            <p className="p">Bepro Network Protocol is a decentralized marketplace and system that connects developers with operators or anyone looking to build open-source development repositories.</p>
            <p className="p">Manage disputes in the network, participate in it and earn token rewards by curating the system & providing development resources.</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols bg">
          <div className="col-content bg-shade">
            <p className="smallCaption">DEVELOPERS</p>
            <h4 className="h3 color-white">Find issues to work</h4>
          <p className="p">Connect with builders and other developers and trade your commits, review and work for rewards in BEPRO, USDC or other tokens.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h1 color-white">+{numberToUX(+inProgress)}</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h1 color-white">{numberToUX(+onNetwork)}</h3>
                <p className="p-small">$BEPRO (Payments)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols reverse bg">
          <div className="col-content bg-shade">
            <p className="smallCaption">CURATION</p>
            <h4 className="h3 color-white">Curate the system</h4>
          <p className="p">Create proposals of bounty distributions & curate the Bepro Network by creating disputes whenever you don&apos;t agree with a bounty distribution of how much each contributor should receive.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h1 color-white">+{numberToUX(totalDevelopers)}</h3>
                <p className="p-small">Protocol Members</p>
              </div>
              <div className="item text-center">
                <h3 className="h1 color-white text-break">{numberToUX(+beproStaked)}</h3>
                <p className="p-small">$BEPRO (Oracles)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-column pt-5">
          <h1 className="h1 color-white pb-5">Backed by</h1>
          <div className="logos-container">

            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://blockgroundcapital.com/" rel="noreferrer">
                <BlockgroundIcon/>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://cleveradvertising.com/" rel="noreferrer">
                <span className="backed-logos logo2"></span>
              </a>
            </div>
             <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://twitter.com/cmsholdings" rel="noreferrer">
                <CmsIcon/>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://ganexacapital.com/" rel="noreferrer">
                <GanexaIcon/>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="http://utrust.com" rel="noreferrer">
                <UtrustIcon/>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://www.shilling.vc" rel="noreferrer">
                <ShillingIcon/>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://www.bynd.vc/en/portfolio" rel="noreferrer">
                <ByndIcon/>
              </a>
            </div>
            <div className="logo-wrap wrap-small hide-xs">
              <a target="_blank" href="https://www.compete2020.gov.pt/" rel="noreferrer">
                <CompeteIcon className='compete-icon'/>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="http://ngc.fund/" rel="noreferrer">
                <NgcIcon/>
              </a>
            </div>

          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-column text-center pt-5 bg-dark-gray">
          <p className="smallCaption color-gray">Audited and approved</p>
          <h1 className="h1 color-white pb-5 px-2">A Protocol for Decentralized Development</h1>
          <div className="logos-container w-100">
            <div className="align-self-center text-center w-50 d-flex justify-content-center align-items-center flex-column d-sm-inline-block">
              <a href='https://www.certik.org/projects/bepro' target='_blank' className='color-gray' rel="noreferrer">
                <span className="backed-logos logo-certik" />

                <span className="smallCaption d-block pt-1">Security audit <br />Completed</span>
              </a>
            </div>
            <div className="align-self-center text-center w-50 d-flex justify-content-center align-items-center flex-column d-sm-inline-block">
              <span className="backed-logos logo-red4sec" />
              <span className="smallCaption color-gray d-block pt-1">Security audit <br/>Completed</span>
            </div>
            <div className="logo-wrap w-100 text-center flex-column bg-security">
              <a href="https://docs.bepro.network/getting-started/bug-bounty" target="_blank" rel="noreferrer">
                <h1 className="h1 color-white">50,000€</h1>
                <p className="smallCaption color-gray">Bug bounty</p>
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols bg-white">
          <div className="col-content">
            <p className="smallCaption color-blue">Documentation</p>
            <h4 className="h3 color-blue">dappKit & The Protocol</h4>
            <p className="p color-blue">TAIKAI created dappKit to work as a showcase of the protocol, a codebase in Javascript already being used/contributed by platforms as Lepricon, Polkamarkets, RealFevr, Exeedme and others.</p>
            <a href="https://docs.dappkit.dev" target="_blank" className="btn btn-md btn-primary w-25" rel="noreferrer">View docs</a>
          </div>
          <div className="col-content bg-gray">
            <div className="d-flex align-items-center justify-content-center">
              <span className="docsImg"></span>
            </div>
          </div>
        </div>

      <div className="d-flex align-items-center justify-content-between cols bg-white overflow-hidden">
          <div className="col-content">
            <div className="d-flex align-items-center justify-content-center">
              <div className="bepro-runkit">
                <Embed source={StakingContractCode} />
              </div>

            </div>
          </div>
          <div className="col-content bg-gray my-runkit">
            <p className="smallCaption color-blue">Web3 API Ecosystem</p>
            <h4 className="h3 color-blue">Dev DAO, DeFi, NFTs and more!</h4>
            <p className="p color-blue">The SDK built via the Protocol that gives you the chance to clone or build on top of its previous contributors, a tool to get your dApp started</p>
          </div>
        </div>

        <div className="community d-flex align-items-center justify-content-center text-center flex-column bg-blue">
          <p className="caption color-white trans">Community</p>
          <h1 className="h1 color-white mb-5">Join the development on <u><a target="_blank" href="https://github.com/bepronetwork" rel="noreferrer">Github</a></u></h1>
          <div className="net-stats d-flex align-items-center justify-content-center flex-column flex-sm-row">
              <div className="item text-center me-sm-4">
                <h3 className="h1 color-white">+{numberToUX(+inProgress)}</h3>
                <p className="p-small color-white ms-sm-4">Open issues</p>
              </div>
              <div className="item text-center me-sm-4">
              <h3 className="h1 color-white">+{totalDevelopers}</h3>
                <p className="p-small color-white ms-sm-4">Members</p>
              </div>
          <div className="item text-center">
            <h3 className="h1 color-white text-break">+{numberToUX(Number(beproStaked)+Number(onNetwork))}</h3>
            <p className="p-small color-white ms-sm-4">$BEPRO</p>
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
