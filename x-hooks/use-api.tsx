import axios from "axios";

const client = axios.create({ baseURL: process.env.NEXT_API_HOST });
client.interceptors.response.use(undefined, (error) => {
  console.debug(`Failed`, error);
  throw error;
});

export default function useApi() {
  async function getTotalDevelopers() {
    return await client
      .get("/api/search/users/total")
      .then((data) => data)
      .catch(() => null);
  }

  return {
    getTotalDevelopers,
  };
}
