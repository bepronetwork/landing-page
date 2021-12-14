import axios from 'axios';

const client = axios.create({baseURL: process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3005/'});

export default class WebNetworkApi {

  static async getTotalDevelopers() {
    return await client.get('api/search/users/total')
  }
  
}
