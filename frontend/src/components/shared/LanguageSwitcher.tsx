"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getLocaleFromLocalStorage,
  setLocaleToLocalStorage,
} from "@/helper/locale.helper";

export default function LanguageSwitcher() {
  const switchTo = (lang: "en" | "ru") => {
    setLocaleToLocalStorage(lang);
    window.location.reload();
  };

  return (
    <Select onValueChange={switchTo}>
      <SelectTrigger>
        <SelectValue placeholder={getLocaleFromLocalStorage()} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">en</SelectItem>
          <SelectItem value="ru">ru</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
