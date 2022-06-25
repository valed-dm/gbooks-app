interface Image {
  smallThumbnail?: string;
  thumbnail?: string;
}

export interface BookItem {
  authors: Array<string>;
  category: Array<string>;
  date: Date;
  description: string;
  id: string;
  image: Image;
  title: string;
}
