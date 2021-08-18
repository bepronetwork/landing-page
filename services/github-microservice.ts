import axios from 'axios';

const client = axios.create({baseURL: process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3005/'});

export default class GithubMicroService {

  static async getTotalDevelopers() {
    return await client.get('/users/total');
  }

  static async getNetworkStats() {
    return await client.get('/networkstats');
  }
}
