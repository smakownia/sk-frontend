import axios from "axios";
import { getApiUrl } from "@/lib/utils";

export const axiosClient = axios.create({
  baseURL: getApiUrl(),
});
