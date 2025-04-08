"use client";

import { JSX, useState } from "react";
import Search from "@/components/shared/Search";
import Gallary from "@/components/shared/Gallary";
import Media from "@/types/content.type";

export default function Home(): JSX.Element {
  const [selectType, setSelectType] = useState<Media>("gifs");
  return (
    <main className="w-2xl h-full">
      <header className="mt-[50%]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center">
          Find it.
        </h1>
        <p className="text-center leading-7 [&:not(:first-child)]:mt-1 text-[var(--muted-foreground)]">
          Quickly find the GIF stickers you need
        </p>
      </header>
      <Search onSelectChange={setSelectType} />
      <Gallary type={selectType} />
    </main>
  );
}
