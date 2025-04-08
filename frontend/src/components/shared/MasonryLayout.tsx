// Переписать стили на tailwind

import Masonry from "react-masonry-css";
import { JSX } from "react";
import styles from "./MasonryLayout.module.css";
import Gif from "@/types/gif.type";
import ContentCard from "./ContentCard";

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  768: 1,
  480: 1,
} as const;

interface MasonryLayoutProps {
  content: Gif[];
}

const MasonryLayout = ({ content }: MasonryLayoutProps): JSX.Element => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {content.map((item) => (
        <ContentCard key={item.id} content={item} />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
