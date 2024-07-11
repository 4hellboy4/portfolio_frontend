export interface XKCDComic {
  month: number;
  num: number;
  link: string;
  year: number;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: number;
}

export interface ComicInfo {
  title: string;
  img: string;
  alt: string;
}

export interface ComicPageProps {
  initialComicInfo: ComicInfo;
  initialXkcdToken: string;
}
