import { GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import Footer from '../components/footer'
import Embed from 'react-runkit'
import { useState } from 'react';
import GithubMicroService from '../services/github-microservice';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import Header from '../components/header';

interface DataSet {
  data: (string|number)[],
  backgroundColor: string,
  borderColor: string,
  tension: number,
  label: string,
}

interface ChartData {
  labels: string[],
  datasets: DataSet[]
}

interface PRData {
  title: string;
  body: string;
  amount: number;
  id: number;
  issueId: string;
  githubId: string;
  updatedAt: string;
  createdAt: string;
}

export default function Home() {

  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const [stats, setStats] = useState({openIssues: 0, beprosStaked: 0, tokensStaked: 0});
  const [chartData, setChartData] = useState<ChartData>();
  const [prData, setPrData] = useState<PRData[]>([]);
  const appLink = process.env.NEXT_PUBLIC_APP_URL;
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {month: 'short', day: 'numeric'});

  function parseChartData(response) {
    const origin = response?.data || {};
    const monthFormatter = new Intl.DateTimeFormat('en-GB', {month: 'long'});
    const pair = (date) => [monthFormatter.format(date), origin[date]];

    const makeChartData = (pairs) => {
      const labels: string[] = [];
      const data: number[] = [];

      pairs.forEach(([month, total]) => {
        labels.push(month);
        data.push(total);
      })

      return ({
        labels,
        datasets: [{
          data,
          backgroundColor: '#4250e4',
          borderColor: '#4250e4',
          tension: 0.2,
          label: `Commits`,
        }]
      })
    }

    return makeChartData(Object.keys(origin).map(pair))
  }

  function initialize() {
    GithubMicroService.getNetworkStats()
                      .then(r => setStats(r?.data || {openIssues: 0, beprosStaked: 0, tokensStaked: 0}));

    GithubMicroService.getTotalDevelopers()
                      .then(r => setTotalDevelopers(r?.data || 0));

    GithubMicroService.getRepoStats()
                      .then(parseChartData)
                      .then(setChartData)

    GithubMicroService.getLastPullRequests()
                      .then(response => setPrData(response?.data || []));
  }

  function renderPrColumn({title, updatedAt, amount}) {

    return (
      <div className="col-md-4" key={title}>
        <div className="git-issue d-flex justify-content-between flex-column">
          <h4 className="h4 color-blue">{title}</h4>
          <div className="d-flex justify-content-between">
            <span className="smallCaption color-green">Merged - {updatedAt ? dateFormatter.format(new Date(updatedAt)) : `unknown`}</span>
            <span className="smallCaption color-gray"> {amount} $bepro</span>
          </div>
        </div>
      </div>
    )
  }

  useEffect(initialize, [])


  defaults.font.family = 'fontRegular';

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
        <Header />

        <div className="landing-hero bg-blue">
          <h1 className="h2 color-white ml-2 mr-2">A Protocol for Decentralized Development</h1>

          <div className="rotator-wrapper d-none d-sm-block">
            <p className="p-big color-white">Use bepro.network to&nbsp;
              <span className="rotator">
                <span>decentralize development</span>
                <span>develop & earn rewards</span>
                <span>curate the protocol</span>
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
          <div className="d-flex flex-row mb-3 align-items-center">
              <p className="smallCaption color-white mb-0">Co-financed by</p>
              <span className="backed-logos mx-2 compete-2020"></span>
            </div>
            <h1 className="h1 color-white">Welcome to <br />Bepro Network</h1>
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
          <p className="p">Connect with builders and other developers and trade your commits, review and work for rewards in BEPRO, USDC or other tokens.</p>
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
              <a target="_blank" href="https://blockgroundcapital.com/">
                <span className="backed-logos logo1"></span>
              </a>
            </div>
            <div className="logo-wrap">
              <a target="_blank" href="https://cleveradvertising.com/">
                <span className="backed-logos logo2"></span>
              </a>
            </div>
            <div className="logo-wrap">
              <a target="_blank" href="https://www.moonrockcapital.io/">
                <span className="backed-logos logo3"></span>
              </a>
            </div>
            <div className="logo-wrap">
              <a target="_blank" href="https://ganexacapital.com/">
                <span className="backed-logos logo4"></span>
              </a>
            </div>
            <div className="logo-wrap">
              <a target="_blank" href="http://utrust.com">
                <span className="backed-logos logo5"></span>
              </a>
            </div>
            <div className="logo-wrap">
              <a target="_blank" href="https://www.shilling.vc/portfolio/betprotocol">
                <span className="backed-logos logo6"></span>
              </a>
            </div>
            <div className="logo-wrap w-50">
              <a target="_blank" href="https://www.bynd.vc/en/portfolio">
                <span className="backed-logos logo7"></span>
              </a>
            </div>
            <div className="logo-wrap w-50">
              <a target="_blank" href="http://ngc.fund/">
                <span className="backed-logos logo8"></span>
              </a>
            </div>

          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-column text-center pt-5 bg-dark-gray">
          <p className="smallCaption color-gray">Audited and approved</p>
          <h1 className="h1 color-white pb-5">A Protocol for Decentralized Development</h1>
          <div className="logos-container w-100">
            <div className="logo-wrap w-50">
              <span className="backed-logos logo-certik"></span>
              <p className="smallCaption color-gray security-labels">Security audit - In progress</p>
            </div>
            <div className="logo-wrap w-50">
              <span className="backed-logos logo-red4sec"></span>
              <p className="smallCaption color-gray security-labels">Security audit - In progress</p>
            </div>
            <div className="logo-wrap w-100 text-center flex-column bg-security">
              <a href="https://docs.bepro.network/getting-started/bug-bounty" target="_blank">
                <h1 className="h1 color-white">50.000€</h1>
                <p className="smallCaption color-gray">Bug bounty</p>
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols bg-white">
          <div className="col-content">
            <p className="smallCaption color-blue">Documentation</p>
            <h4 className="h3 color-blue">Build the future on BEPRO</h4>
            <p className="p color-blue">We created bepro-js to work as a showcase of our protocol, a way that BetBlock Technology LDA finances and works with other companies to provide code for platforms as Lepricon, Polkamarkets, RealFevr, Exeedme and others.</p>
            <a href="https://docs.bepro.network/" target="_blank" className="btn btn-md btn-primary w-25">View docs</a>
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
            <h4 className="h3 color-white">Join the bepro-js ecosystem</h4>
            <p className="p color-white">An SDK that gives you the chance to clone or build on top of our direct operators, a tool to get your app started</p>
          </div>
        </div>

        <div className="git-stats bg-white">
          <div className="container">

            <div className="row pb-3">
              <div className="col-md-12">
                <a target="_blank" href="https://github.com/bepronetwork">
                  <h4 className="h3 color-blue">Latest activity</h4>
                </a>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm">
                <a target="_blank" href="https://github.com/bepronetwork/bepro-js">
                  <span className="color-blue">bepro-js</span>
                </a>
              </div>
              <div className="col-sm">
                <a target="_blank" href="https://github.com/bepronetwork/web-network">
                  <span className="color-blue">web-network</span>
                </a>
              </div>
              <div className="col-sm">
                <a target="_blank" href="https://github.com/bepronetwork/landing-page">
                  <span className="color-blue">landing-page</span>
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="smallCaption">Development activity</p>
                <div className="git-stats-chart">
                  {chartData && <Line data={chartData} options={chartOptions} />  || ``}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="community d-flex align-items-center justify-content-center text-center flex-column bg-blue">
          <p className="caption color-white trans">Community</p>
          <h1 className="h1 color-white mb-5">Join our the development on <a target="_blank" href="https://github.com/bepronetwork">Github</a></h1>
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
