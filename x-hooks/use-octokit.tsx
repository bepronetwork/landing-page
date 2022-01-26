import { Octokit } from "octokit";
import { useState } from "react";

const mapData = ({data}) => data;

const GITHUB_STATS_TTL = 24 * 60 * 60 * 1000

const githubRepoStats = {
  lastUpdated: 0,
  data: {},
}

const githubForkStats = {
  lastUpdated: 0,
  data: {},
}

export default function useOctokit() {
  const [octokit, setOctokit] = useState<Octokit>(new Octokit());

  function getOwnerRepoFrom(path: string) {
    const [owner, repo] = path.split(`/`);
    return { owner, repo };
  }

  async function getRepoStats() {
    if (githubRepoStats.lastUpdated && +new Date() - githubRepoStats.lastUpdated <= GITHUB_STATS_TTL)
    return githubRepoStats.data;

  const repos = [
    `bepronetwork/bepro-js`,
    `bepronetwork/web-network`,
    `bepronetwork/landing-page`,
    `bepronetwork/webapp-community`,
    `bepronetwork/grants-program`,
    `bepronetwork/B.E.P.R.O`,
    `bepronetwork/b2c-layout`,
    `bepronetwork/ms-withdraw`,
    `bepronetwork/backoffice`,
    `bepronetwork/ms-master`,
    `bepronetwork/scheduler-light`,
    `bepronetwork/ms-rabbit-jackpot`,
    `bepronetwork/listener-esports-data`,
    `bepronetwork/ms-esports`,
    `bepronetwork/esports-middleware`,
  ];

  const toDate = (timestamp) => +new Date(timestamp * 1000);

  const toDateObject = (p, {total = 0, week = 0}) =>
    ({...p, [toDate(week)]: (p[toDate(week)] || 0) + total});

  const getCommitActivity = (repo) =>
    octokit.rest.repos.getCommitActivityStats({...getOwnerRepoFrom(repo)}).then(mapData)

  return Promise.all(repos.map(getCommitActivity))
    .then(reposWeekly => reposWeekly.map(week => ([week] || []).reduce(toDateObject, {})))
    .then(reposMonthly => {

      const reduced = {};
      for (const repo of reposMonthly)
        for (const [k, v] of Object.entries(repo))
          reduced[k] = (reduced[k] || 0) + v;

      return reduced;
    }).then(reduced => {
      githubRepoStats.data = reduced;
      githubRepoStats.lastUpdated = +new Date();

      return reduced;
    })
  }

  async function getForksAmountFor(path: string) {
    const {data: forks} = await octokit.rest.repos.listForks({...getOwnerRepoFrom(path), per_page: 100,});
    const {data: stars} = await octokit.rest.activity.listStargazersForRepo({...getOwnerRepoFrom(path), per_page: 100,})
    const toLen = (array) =>  array.length > 99 ? `+99` : array.length.toString();

    return { ...getOwnerRepoFrom(path), forks: toLen(forks), stars: toLen(stars) };
  }

  async function getRepoForks(repos = []) {
    if (githubForkStats.lastUpdated && +new Date() - githubForkStats.lastUpdated <= GITHUB_STATS_TTL)
      return githubForkStats.data;

    const data = await Promise.all(repos.map(getForksAmountFor))

    githubForkStats.lastUpdated = +new Date();
    githubForkStats.data = data;

    return data;
  }


  return {
    getRepoForks,
    getRepoStats
  };
}
