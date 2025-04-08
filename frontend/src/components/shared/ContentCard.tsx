import { JSX, useState } from "react";
import Image from "next/image";

import { Skeleton } from "../ui/skeleton";
import styles from "./MasonryLayout.module.css";
import Link from "next/link";
import { Download } from "lucide-react";
import Gif from "@/types/gif.type";

interface ContentCardProps {
  content: Gif;
}

const ContentCard = ({ content }: ContentCardProps): JSX.Element => {
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(true);
  return (
    <div className={styles.masonryItem}>
      {imageIsLoading && <Skeleton className="w-full h-full absolute" />}
      <Image
        onLoad={() => setImageIsLoading(false)}
        unoptimized
        src={content.images.fixed_width.webp}
        alt={content.title}
        height={Number(content.images.fixed_width.height)}
        width={Number(content.images.fixed_width.width)}
      />
      <Link
        href={""}
        style={{
          height: content.images.fixed_width.height,
          width: content.images.fixed_width.width,
        }}
        className={styles.link}
      >
        <Download size={24} className={styles.icon} />
      </Link>
    </div>
  );
};
export default ContentCard;
