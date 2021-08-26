import { GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import Footer from '../components/footer'
import Embed from 'react-runkit'
import { useState } from 'react';
import GithubMicroService from '../services/github-microservice';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';


export default function Home() {

  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const [stats, setStats] = useState({openIssues: 0, beprosStaked: 0, tokensStaked: 0});
  const appLink = process.env.NEXT_PUBLIC_APP_URL;

  function initialize() {
    GithubMicroService.getNetworkStats()
                      .then(r => setStats(r.data));

    GithubMicroService.getTotalDevelopers()
                      .then(r => setTotalDevelopers(r.data));
  }

  useEffect(initialize, [])


  defaults.font.family = 'fontRegular';


  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Volume',
      data: [65, 59, 80, 81, 26, 55, 40],
      backgroundColor: '#4250e4',
      borderColor: '#4250e4',
      tension: 0.2
    }]
  };
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
      <>
        <div className="main-nav d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <a href="/" className="logo">
              <span className="bepro-logo-white"></span>
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

        <div className="landing-hero bg-blue">
          <h1 className="h2 color-white ml-2 mr-2">Decentralized Development at Scale</h1>

          <div className="rotator-wrapper">
            <p className="p-big color-white">Use bepro.network to&nbsp;
              <span className="rotator">
                <span>resolve disputes</span>
                <span>do merges</span>
                <span>do settlements</span>
                <span>propose bounties</span>
              </span>
            </p>
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
            <h4 className="h3 color-white">Find issues to work</h4>
          <p className="p">Connect with builders and other developers and trade your commits, review and work for rewards in USDC.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h1 color-white">+{stats.openIssues}</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h1 color-white">{stats.tokensStaked}</h3>
                <p className="p-small">$USD</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols reverse bg">
          <div className="col-content bg-shade">
            <p className="smallCaption">CURATION</p>
            <h4 className="h3 color-white">Curate the system</h4>
          <p className="p">Create proposals of bounty distributions & curate the Bepro Network by creating disputes whenever you don´t agree with a bounty distribution of how much each contributor should receive.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h1 color-white">+{stats.openIssues}</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h1 color-white">+{stats.beprosStaked}</h3>
                <p className="p-small">$BEPRO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-column pt-5">
          <h1 className="h1 color-white pb-5">Backed by</h1>
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

        <div className="d-flex align-items-center justify-content-between flex-column text-center pt-5 bg-dark-gray">
          <p className="smallCaption color-gray">Audited and approved</p>
          <h1 className="h1 color-white pb-5">A secure protocol for money</h1>
          <div className="logos-container w-100">
            <div className="logo-wrap w-50">
              <span className="backed-logos logo-certik"></span>
              <p className="smallCaption color-gray security-labels">Security audit</p>
            </div>
            <div className="logo-wrap w-50">
              <span className="backed-logos logo-red4sec"></span>
              <p className="smallCaption color-gray security-labels">Security audit</p>
            </div>
            <div className="logo-wrap w-100 text-center flex-column bg-security">
              <h1 className="h1 color-white">$150,000</h1>
              <p className="smallCaption color-gray">Bug bounty</p>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols bg-white">
          <div className="col-content">
            <p className="smallCaption color-blue">Documentation</p>
            <h4 className="h3 color-blue">Build the future on BEPRO</h4>
            <p className="p color-blue">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <a href="https://docs.bepro.network/" className="btn btn-md btn-primary w-25">View docs</a>
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
            <h4 className="h3 color-white">Build the future on BEPRO</h4>
            <p className="p color-white">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>

        <div className="git-stats bg-white">
          <div className="container">

            <div className="row pb-3">
              <div className="col-md-12">
                <h4 className="h3 color-blue">Latest activity</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="git-issue d-flex justify-content-between flex-column">
                  <h4 className="h4 color-blue">Smart Contracts for Bet Settlement</h4>
                  <div className="d-flex justify-content-between">
                    <span className="smallCaption color-green">Merged - 3 Jul</span>
                    <span className="smallCaption color-gray"> 500k $bepro</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="git-issue d-flex justify-content-between flex-column">
                  <h4 className="h4 color-blue">Blockchain for Advanced Bio Fuels - Supply Traceability [@Kigreen]</h4>
                  <div className="d-flex justify-content-between">
                    <span className="smallCaption color-green">Merged - 3 Jul</span>
                    <span className="smallCaption color-gray"> 500k $bepro</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="git-issue d-flex justify-content-between flex-column">
                  <h4 className="h4 color-blue">Create Vue app for bepro-js documentation</h4>
                  <div className="d-flex justify-content-between">
                    <span className="smallCaption color-green">Merged - 3 Jul</span>
                    <span className="smallCaption color-gray"> 500k $bepro</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col">
                <p className="smallCaption">Development activity</p>
                <div className="git-stats-chart">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="community d-flex align-items-center justify-content-center text-center flex-column bg-blue">
          <p className="caption color-white trans">Community</p>
          <h1 className="h1 color-white mb-5">Join our the development on <a href="https://github.com/bepronetwork">Github</a></h1>
          <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h1 color-white">+{stats.openIssues}</h3>
                <p className="p-small color-white">Open issues</p>
              </div>
              <div className="item text-center mr-3">
              <h3 className="h1 color-white">+{totalDevelopers}</h3>
                <p className="p-small color-white">Developers</p>
              </div>
          <div className="item text-center">
            <h3 className="h1 color-white">+{stats.beprosStaked}</h3>
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
