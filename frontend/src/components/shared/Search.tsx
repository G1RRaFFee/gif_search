import { ChangeEvent, JSX, useState } from "react";
import useSearch from "@/hooks/searchGif.hook";
import { useDebounce } from "@uidotdev/usehooks";
import { Input } from "../ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { ModeToggle } from "@/components/shared/ModeToggle";
import MasonryLayout from "./MasonryLayout";
import Media from "@/types/content.type";
import { useTranslations } from "next-intl";
import SearchButton from "./SearchButton";
import MediaSelect from "./MediaSelect";

interface SearchProps {
  onSelectChange: (event: Media) => void;
  mediaType: Media;
}

const Search = ({ onSelectChange, mediaType }: SearchProps): JSX.Element => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);
  const { data, isLoading, error } = useSearch(debouncedQuery, mediaType);
  const _ = useTranslations("SearchInput");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <section className="w-full sticky top-0 py-4 z-40 bg-[var(--background)]">
      <div className="flex w-full gap-2">
        <ModeToggle />
        <Input
          type="text"
          onChange={handleInputChange}
          placeholder={_("placeholder")}
          className="border p-2 rounded w-full"
        />
        {error && <p>Error fetching results</p>}
        <SearchButton isLoading={isLoading} />
        <MediaSelect onSelectChange={onSelectChange} />
      </div>
      {data.length !== 0 && (
        <>
          <h2 className="scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0 mt-4">
            {mediaType}
          </h2>
          <p className="leading-7 text-[var(--muted-foreground)] mt-1">
            on request: {query}
          </p>
          <MasonryLayout content={data} />
        </>
      )}
    </section>
  );
};

export default Search;
