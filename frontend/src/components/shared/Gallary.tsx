import { JSX } from "react";
import useTrandingContent from "@/hooks/gif.hook";
import dynamic from "next/dynamic";
import Media from "@/types/content.type";
import InfiniteScroll from "react-infinite-scroll-component";

const MasonryLayout = dynamic(
  () => import("@/components/shared/MasonryLayout"),
  { ssr: false }
);

interface GallaryProps {
  type: Media;
}

const Gallary = ({ type }: GallaryProps): JSX.Element => {
  const { result, fetchMoreGifs, hasMore } = useTrandingContent(type);
  return (
    <section className="mt-4">
      <h2 className="scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0">
        Tranding.
      </h2>
      <p className="leading-7 text-[var(--muted-foreground)] mt-1">
        The best and most popular
      </p>
      {/* Внести в Masonry компонент */}
      <InfiniteScroll
        dataLength={result.length} // Количество загруженных элементов
        next={fetchMoreGifs} // Функция загрузки новых данных
        hasMore={hasMore} // Есть ли еще данные для загрузки
        loader={<p>Загрузка...</p>} // Индикатор загрузки
        endMessage={<p>Это все!</p>} // Сообщение, когда данные закончились
      >
        <MasonryLayout content={result} />
      </InfiniteScroll>
    </section>
  );
};

export default Gallary;
