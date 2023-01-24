import axios from "axios";

const http = axios.create({
  baseURL: "https://web-production-07ad.up.railway.app",
});

export default http;