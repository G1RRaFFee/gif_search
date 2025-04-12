import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Media from "@/types/content.type";
import { useTranslations } from "next-intl";
import { JSX } from "react";

interface MediaSelectProps {
  onSelectChange: (event: Media) => void;
}

const MediaSelect = ({ onSelectChange }: MediaSelectProps): JSX.Element => {
  const _ = useTranslations("Media");

  return (
    <Select onValueChange={onSelectChange} defaultValue="gifs">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select media" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="gifs">{_("gif")}</SelectItem>
          <SelectItem value="stickers">{_("sticker")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MediaSelect;
