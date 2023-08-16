import axios from "axios";

export const apiServerClient = axios.create({
  baseURL: process.env.API_URL,
});
