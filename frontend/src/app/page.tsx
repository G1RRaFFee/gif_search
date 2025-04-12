"use client";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { JSX, useState } from "react";
import Search from "@/components/shared/Search";
import Gallary from "@/components/shared/Gallary";
import Media from "@/types/content.type";

export default function Home(): JSX.Element {
  const [selectMediaType, setSelectMediaType] = useState<Media>("gifs");
  const _ = useTranslations("Header");

  return (
    <main className="w-2xl h-full">
      <header className="mt-[50%]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center">
          {_("title")}
        </h1>
        <p className="text-center leading-7 [&:not(:first-child)]:mt-1 text-[var(--muted-foreground)]">
          {_("description")}
        </p>
        <LanguageSwitcher />
      </header>
      <Search onSelectChange={setSelectMediaType} mediaType={selectMediaType} />
      <Gallary type={selectMediaType} />
    </main>
  );
}
