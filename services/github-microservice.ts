import axios from 'axios';

const client = axios.create({baseURL: process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3005/'});

export default class GithubMicroService {

  static async getTotalDevelopers() {
    return await client.get('/users/total').catch(_ => null);
  }

  static async getNetworkStats() {
    return await client.get('/networkstats').catch(_ => null);
  }

  static async getLastPullRequests() {
    return await client.get(`/pullrequests/last/3`).catch(_ => null);
  }

  static async getRepoStats() {
    return await client.get(`/repostats`).catch(_ => null);
  }
}
