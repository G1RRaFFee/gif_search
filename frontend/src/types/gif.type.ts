interface Gif {
  id: string;
  title: string;
  images: {
    fixed_width: {
      width: string;
      height: string;
      webp: string;
    };
    original: {
      height: string;
      width: string;
      webp: string;
    };
  };
}

export default Gif;
