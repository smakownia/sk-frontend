import { getApiUrl } from "../utils";

export async function fetchClient(path: string, init?: RequestInit) {
  return fetch(getApiUrl(path), init).then((res) => {
    if (!res.ok) {
      throw new Error();
    }

    return res;
  });
}
