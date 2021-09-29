import { GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import Footer from '../components/footer'
import Embed from 'react-runkit'
import { useState } from 'react';
import GithubMicroService from '../services/github-microservice';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import Header from '../components/header';
import {numberToUX} from '../helpers/NumberToUX';

interface DataSet {
  data: (string|number)[],
  backgroundColor: string,
  borderColor: string,
  tension: number,
  label: string,
}

interface RepoStats{
  forks: string,
  repo: string,
  stars: string,
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
  const [reposStats, setReposStats] = useState<RepoStats[]>([] as RepoStats[]);
  const [chartData, setChartData] = useState<ChartData>();
  const appLink = process.env.NEXT_PUBLIC_APP_URL;
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {month: 'short', day: 'numeric',});

  function parseChartData(response) {
    const origin = response?.data || {};
    const monthFormatter = new Intl.DateTimeFormat('en-GB', {month: 'long'});
    const formatDate = ([date, value]) => [dateFormatter.format(date), value];

    const makeChartData = (pairs) => {
      const labels: string[] = [];
      const data: number[] = [];

      const interval = 4 * 3;
      pairs.splice(0, pairs.length - 1).forEach(([week, total], i) => {
          labels.push(!((i / interval) % 1) ? week : ``);
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

    return makeChartData(Object.entries(origin).map(formatDate))
  }

  function initialize() {
    GithubMicroService.getNetworkStats()
                      .then(r => setStats(r?.data || {openIssues: 0, beprosStaked: 0, tokensStaked: 0}));

    GithubMicroService.getTotalDevelopers()
                      .then(r => setTotalDevelopers(r?.data || 0));

    GithubMicroService.getRepoStats()
                      .then(parseChartData)
                      .then(setChartData)

    GithubMicroService.getRepoForks()
                      .then(r => { setReposStats(r.data) });
  }

  function renderPrColumn({repo, forks, stars}, index) {
    return (
      <div className="col-md-4" key={index}>
        <a target="_blank" href={`https://github.com/bepronetwork/${repo}`}>
        <div className="git-issue d-flex justify-content-between flex-column">
            <h4 className="h4 color-blue">{repo}</h4>
            <div className="d-flex justify-content-between">
              <span className="smallCaption color-green">{stars || 0} Stars</span>
              <span className="smallCaption color-blue">{forks || 0} Forks</span>
            </div>
        </div>
        </a>
      </div>
    )
  }

  useEffect(initialize, [])

  defaults.font.family = 'fontRegular';

  const chartOptions = {
    elements: {
      point: {
        radius: 0
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0
        },
        grid: {
          display: false
        }
      },
      y: {
          beginAtZero: true,
        },
    },
  };

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
              <span className="smallCaption text-white">BUILDING WITH US</span>
            </div>
            {/* To add new logos on slide-3 and slide-4 you need to update the logo counter on styles.scss */}
            <div className="slide-3">
              <a target="_blank" href="https://www.nftsee.io/">
                <div className="slide-item log-1"></div>
              </a>
              <a target="_blank" href="https://www.un1ke.io/">
                <div className="slide-item log-2"></div>
              </a>
              <a target="_blank" href="https://www.punkskinsociety.com/">
                <div className="slide-item log-3"></div>
              </a>
                <a target="_blank" href="https://www.realfevr.com/">
                <div className="slide-item log-4"></div>
              </a>
                <a target="_blank" href="https://www.exeedme.com/">
                <div className="slide-item log-5"></div>
              </a>
                <a target="_blank" href="https://trustfi.org/">
                <div className="slide-item log-6"></div>
              </a>
                <a target="_blank" href="https://www.polkamarkets.com/">
                <div className="slide-item log-7"></div>
              </a>
              <a target="_blank" href="https://www.clashcardschampions.net/">
                <div className="slide-item log-17"></div>
              </a>
            </div>
            <div className="slide-4">
                <a target="_blank" href="https://lepricon.io/">
                <div className="slide-item log-8"></div>
              </a>
                <a target="_blank" href="https://dotmoovs.com/">
                <div className="slide-item log-9"></div>
              </a>
                <a target="_blank" href="https://liveduel.com/future/">
                <div className="slide-item log-10"></div>
              </a>
                <a target="_blank" href="#">
                <div className="slide-item log-11"></div>
              </a>
                <a target="_blank" href="https://crypto.com/">
                <div className="slide-item log-12"></div>
              </a>
                <a target="_blank" href="https://project.rally-tascos.com/">
                <div className="slide-item log-13"></div>
              </a>
                <a target="_blank" href="https://cleveradvertising.com/">
                <div className="slide-item log-14"></div>
              </a>
                <a target="_blank" href="https://www.uzyth.com/">
                <div className="slide-item log-15"></div>
              </a>
              <a target="_blank" href="https://bistox.com/">
                <div className="slide-item log-16"></div>
              </a>
              <a target="_blank" href="https://worldbox.tv/">
                <div className="slide-item log-18"></div>
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
                <h3 className="h1 color-white">+{numberToUX(+stats.openIssues)}</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h1 color-white">{numberToUX(+stats.tokensStaked)}</h3>
                <p className="p-small">$BEPRO (Payments)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols reverse bg">
          <div className="col-content bg-shade">
            <p className="smallCaption">CURATION</p>
            <h4 className="h3 color-white">Curate the system</h4>
          <p className="p">Create proposals of bounty distributions & curate the Bepro Network by creating disputes whenever you don't agree with a bounty distribution of how much each contributor should receive.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h1 color-white">+{stats.openIssues}</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h1 color-white text-break">{numberToUX(+stats.beprosStaked)}</h3>
                <p className="p-small">$BEPRO (Oracles)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-column pt-5">
          <h1 className="h1 color-white pb-5">Backed by</h1>
          <div className="logos-container">

            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://blockgroundcapital.com/">
                <span className="backed-logos logo1"></span>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://cleveradvertising.com/">
                <span className="backed-logos logo2"></span>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://www.moonrockcapital.io/">
                <span className="backed-logos logo3"></span>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://ganexacapital.com/">
                <span className="backed-logos logo4"></span>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="http://utrust.com">
                <span className="backed-logos logo5"></span>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://www.shilling.vc">
                <span className="backed-logos logo6"></span>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="https://www.bynd.vc/en/portfolio">
                <span className="backed-logos logo7"></span>
              </a>
            </div>
            <div className="logo-wrap wrap-small hide-xs">
              <a target="_blank" href="https://www.compete2020.gov.pt/">
                <span className="backed-logos logo8"></span>
              </a>
            </div>
            <div className="logo-wrap wrap-small">
              <a target="_blank" href="http://ngc.fund/">
                <span className="backed-logos logo9"></span>
              </a>
            </div>

          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between flex-column text-center pt-5 bg-dark-gray">
          <p className="smallCaption color-gray">Audited and approved - In Progress</p>
          <h1 className="h1 color-white pb-5 px-2">A Protocol for Decentralized Development</h1>
          <div className="logos-container w-100">
            <div className="align-self-center logo-wrap-security text-center w-50">
              <span className="backed-logos logo-certik" />
              <span className="smallCaption color-gray d-block pt-1">Security audit <br/>In progress</span>
            </div>
            <div className="align-self-center logo-wrap-security w-50 text-center">
              <span className="backed-logos logo-red4sec" />
              <span className="smallCaption color-gray d-block pt-1">Security audit <br/>In progress</span>
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
            <h4 className="h3 color-blue">BEPRO-JS & The Protocol</h4>
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
            <p className="smallCaption color-blue">Web3 API Ecosystem</p>
            <h4 className="h3 color-blue">Gaming, DeFi, NFTs and more!</h4>
            <p className="p color-blue">An SDK that gives you the chance to clone or build on top of our direct operators, a tool to get your app started</p>
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
              {reposStats.map(renderPrColumn)}
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
          <h1 className="h1 color-white mb-5">Join our development on <u><a target="_blank" href="https://github.com/bepronetwork">Github</a></u></h1>
          <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h1 color-white">+{stats.openIssues}</h3>
                <p className="p-small color-white">Open issues</p>
              </div>
              <div className="item text-center mr-3">
              <h3 className="h1 color-white">+{totalDevelopers}</h3>
                <p className="p-small color-white">Members</p>
              </div>
          <div className="item text-center">
            <h3 className="h1 color-white text-break">+{numberToUX(+stats.beprosStaked)}</h3>
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
