import axios from "axios";
import { getApiUrl } from "@/lib/utils";

export const apiClient = axios.create({
  baseURL: getApiUrl(),
});
