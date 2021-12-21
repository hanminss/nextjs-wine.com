import { WINE_API_ENDPOINT } from "./../constants/index";
import useSWR from "swr";
import { fetcher } from "./../utils/fetcher";

export const useWineData = (path: string) => {
  return useSWR(`${WINE_API_ENDPOINT}${path}`, fetcher);
};
