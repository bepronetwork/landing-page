import { GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import Footer from '../components/footer'
import Embed from 'react-runkit'
import { useState } from 'react';
import GithubMicroService from '../services/github-microservice';

export default function Home() {

  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const [openIssues, setOpenIssues] = useState(0);
  const [beprosStaked, setBeprosStaked] = useState(0);
  const [tokensStaked, setTokensStaked] = useState(0);

  useEffect(() => {
    getTotalDevelopers();
    getNetworkStats();
  }, []);

  const getTotalDevelopers = async () => {
    const resp = await GithubMicroService.getTotalDevelopers();
    setTotalDevelopers(resp.data);
  }

  const getNetworkStats = async () => {
    const resp = await GithubMicroService.getNetworkStats();

    setOpenIssues(resp.data?.openIssues);
    setBeprosStaked(resp.data?.beprosStaked);
    setTokensStaked(resp.data?.tokensStaked);
  }

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
            <button className="btn btn-md btn-white">App</button>
          </div>
        </div>

        <div className="landing-hero bg-blue">
          <div className="rotator-wrapper">
            <h1 className="h2 color-white">Use bepro.network to&nbsp;
              <span className="rotator">
                <span>resolve disputes</span>
                <span>do merges</span>
                <span>do settlements</span>
                <span>propose bounties</span>
              </span>
            </h1>
          </div>
          <div className="slides">
            <div className="slide-1"></div>
            <div className="slide-2"></div>
          </div>
        </div>

        <div className="d-flex bg-blue align-items-center justify-content-between cols">
          <div className="col-content">
            <h1 className="h1 color-white">Welcome to <br />bepro-js network</h1>
          </div>
          <div className="col-content bg-shade">
            <p className="smallCaption">Build the future of Web3</p>
            <p className="p">Built around the BEPRO token, a utility token that enables token holders to manage disputes in the network, participate in it, and earn token rewards by curating the system & providing development resources.</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols bg">
          <div className="col-content bg-shade">
            <p className="smallCaption">DEVELOPERS</p>
            <h4 className="h4 color-white">Find issues to work</h4>
          <p className="p">Connect with builders and other developers and trade your commits, review and work for rewards in USDC.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h3 color-white">+{openIssues}</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h3 color-white">{tokensStaked}</h3>
                <p className="p-small">$USD</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols reverse bg">
          <div className="col-content bg-shade">
            <p className="smallCaption">CURATION</p>
            <h4 className="h4 color-white">Curate the system</h4>
          <p className="p">Create proposals of bounty distributions & curate the Bepro Network by creating disputes whenever you don´t agree with a bounty distribution of how much each contributor should receive.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h3 color-white">+30</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h3 color-white">+{beprosStaked}</h3>
                <p className="p-small">$BEPRO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-column pt-5">
          <h1 className="h1 color-white">Backed by</h1>
          <div className="logos-container">

            <div className="logo-wrap">
              <span className="backed-logos logo1"></span>
            </div>
            <div className="logo-wrap">
              <span className="backed-logos logo2"></span>
            </div>
            <div className="logo-wrap">
              <span className="backed-logos logo3"></span>
            </div>
            <div className="logo-wrap">
              <span className="backed-logos logo4"></span>
            </div>
            <div className="logo-wrap">
              <span className="backed-logos logo5"></span>
            </div>
            <div className="logo-wrap">
              <span className="backed-logos logo6"></span>
            </div>
            <div className="logo-wrap w-50">
              <span className="backed-logos logo7"></span>
            </div>
            <div className="logo-wrap w-50">
              <span className="backed-logos logo8"></span>
            </div>

          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols bg-white">
          <div className="col-content">
            <p className="smallCaption color-blue">Documentation</p>
            <h4 className="h4 color-blue">Build the future on BEPRO</h4>
            <p className="p color-blue">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button className="btn btn-md btn-primary w-25">View docs</button>
          </div>
          <div className="col-content bg-gray">
            <div className="d-flex align-items-center justify-content-center">
              <span className="docsImg"></span>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols bg-white">
          <div className="col-content">
            <div className="d-flex align-items-center justify-content-center">
              <div className="bepro-runkit">
                <Embed source={`
const {StakingContract} = require("bepro-js");

/* Create Instance */
let staking = new StakingContract({tokenAddress : "0x7a7748bd6f9bac76c2f3fcb29723227e3376cbb2", opt : {web3Connection : 'https://kovan.infura.io/v3' } });

/* Login with Metamask/Web3 Wallet */
await staking.login();

/* Deploy Staking Contract */
let res = await staking.deploy();

/* Access methods easily */
let availableTokens = await staking.availableTokens();
                `} />
              </div>

            </div>
          </div>
          <div className="col-content bg-gray my-runkit">
            <p className="smallCaption color-white">Documentation</p>
            <h4 className="h4 color-white">Build the future on BEPRO</h4>
            <p className="p color-white">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>

        <div className="community d-flex align-items-center justify-content-center text-center flex-column bg-gray">
          <p className="caption color-white trans">Community</p>
          <h1 className="h1 color-white mb-5">Join our the development on <a href="#">Github</a></h1>
          <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h3 color-white">+30</h3>
                <p className="p-small color-white">Open issues</p>
              </div>
              <div className="item text-center mr-3">
              <h3 className="h3 color-white">+{totalDevelopers}</h3>
                <p className="p-small color-white">Developers</p>
              </div>
          <div className="item text-center">
            <h3 className="h3 color-white">+30</h3>
            <p className="p-small color-white">$BEPRO</p>
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
