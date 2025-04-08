import { ChangeEvent, JSX, useState } from "react";
import useSearchGif from "@/hooks/searchGif.hook";
import { useDebounce } from "@uidotdev/usehooks";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/shared/ModeToggle";
import MasonryLayout from "./MasonryLayout";
import Media from "@/types/content.type";

interface SearchProps {
  onSelectChange: (event: Media) => void;
}

const Search = ({ onSelectChange }: SearchProps): JSX.Element => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);
  const { data, isLoading, error } = useSearchGif(debouncedQuery);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <section className="w-full sticky top-0 pt-4">
      <div className="flex w-full gap-2">
        <ModeToggle />
        <Input
          type="text"
          onChange={handleInputChange}
          placeholder="Gif, Stickers..."
          className="border p-2 rounded w-full"
        />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching results</p>}
        <Button>Find it.</Button>

        <Select onValueChange={onSelectChange} defaultValue="gifs">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Media</SelectLabel>
              <SelectItem value="gifs">Gifs</SelectItem>
              <SelectItem value="stickers">Stickers</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {data.length !== 0 && (
        <>
          <h2 className="scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0 mt-4">
            Result
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
