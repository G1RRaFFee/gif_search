import useSWRInfinite from "swr/infinite";

import Gif from "@/types/gif.type";
import GiphyResponse from "@/types/giphy/response.type";
import Media from "@/types/content.type";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((response) => response.json());

const useTrandingContent = (type: Media = "gifs") => {
  const getUrl = (
    pageIndex: number,
    previousPageData: GiphyResponse | null
  ) => {
    if (previousPageData && !previousPageData.data.length) return null;
    return `https://api.giphy.com/v1/${type}/trending?api_key=${
      process.env.NEXT_PUBLIC_GIPHY_API_KEY
    }&limit=20&offset=${pageIndex * 20}`;
  };

  const { data, error, size, setSize, isLoading } =
    useSWRInfinite<GiphyResponse>(getUrl, fetcher, {
      revalidateOnFocus: false,
    });
  const result: Gif[] = data
    ? [
        ...new Map(
          data.flatMap((page) => page.data).map((gif) => [gif.id, gif])
        ).values(),
      ]
    : [];

  return {
    result,
    isLoading,
    error,
    fetchMoreGifs: () => setSize(size + 1),
    hasMore: data ? data[data.length - 1]?.data.length > 0 : true,
  };
};

export default useTrandingContent;
