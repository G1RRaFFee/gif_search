// // TODO: Удалить
// "use client";

// import Image, { ImageProps } from "next/image";
// import { JSX, useEffect, useRef, useState } from "react";
// import { Skeleton } from "../ui/skeleton";
// import { Download } from "lucide-react";
// import { Button } from "../ui/button";

// const GifComponent = ({
//   src,
//   alt,
//   width,
//   height,
//   ...props
// }: ImageProps): JSX.Element => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const linkRef = useRef<HTMLAnchorElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (containerRef.current && height) {
//       const rowSpan = Math.ceil((height as number) / 10);
//       containerRef.current.style.gridRow = `span ${rowSpan}`;
//     }
//   }, [height]);

//   return (
//     <div ref={containerRef} style={{ width }} className="relative">
//       {isLoading && <Skeleton className="w-full h-full" />}
//       <Image
//         unoptimized
//         src={src}
//         alt={alt}
//         width={Number(width)}
//         height={Number(height)}
//         {...props}
//         onLoad={() => setIsLoading(false)}
//         className={`transition-opacity duration-300 absolute ${
//           isLoading ? "opacity-0" : "opacity-100"
//         }`}
//       />
//       <a ref={linkRef} className="hidden absolute" />
//       <div
//         style={{ height, width }}
//         className="absolute flex justify-center items-center z-2 bg-red-400 opacity-50"
//       >
//         <Button>
//           <Download size={20} />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default GifComponent;
