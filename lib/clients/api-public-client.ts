import axios from "axios";

export const apiPublicClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
