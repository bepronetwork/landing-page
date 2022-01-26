import axios from "axios";

const ApiWebNetwork = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_WEB_NETWORK_API_HOST || "http://localhost:3005",
});

export default ApiWebNetwork;
