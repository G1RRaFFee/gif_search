import ROUTES from "@/constants/route.constant";
import GiphyResponse from "@/types/giphy/response.type";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

const useSearchGif = (query: string) => {
  const { data, error, isLoading } = useSWR<GiphyResponse>(
    query
      ? `${ROUTES.searchGifs}?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${query}`
      : null,
    fetcher
  );

  return {
    data: data?.data || [],
    error,
    isLoading,
  };
};

export default useSearchGif;
