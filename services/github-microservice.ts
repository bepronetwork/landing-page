import axios from 'axios';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3005';
export default class GithubMicroService {

  static async getTotalDevelopers() {
    return await axios.get(API_HOST + '/users/total');
  }

  static async getNetworkStats() {
    return await axios.get(API_HOST + '/networkstats');
  }
}
