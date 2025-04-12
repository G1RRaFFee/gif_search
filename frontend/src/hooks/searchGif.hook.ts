import Media from "@/types/content.type";
import GiphyResponse from "@/types/giphy/response.type";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

const useSearch = (query: string, mediaType: Media = "gifs") => {
  const { data, error, isLoading } = useSWR<GiphyResponse>(
    query
      ? `https://api.giphy.com/v1/${mediaType}/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${query}`
      : null,
    fetcher
  );

  return {
    data: data?.data || [],
    error,
    isLoading,
  };
};

export default useSearch;
