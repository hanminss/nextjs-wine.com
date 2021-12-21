import { API_ENDPOINT } from "../constants/index";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useData = (path: string, detail: string) => {
  return useSWR(`${API_ENDPOINT}${path}/${detail}`, fetcher);
};
