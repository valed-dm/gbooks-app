import axios from "axios";
import { BookItem } from "../models/BookData";
import { ResData } from "../models/ResData";
import { srchCtl } from "../store/reducers/srchCtlReducer";

export const getBooks = async (
  startSearch: boolean,
  bookTitle: string,
  searchPace: string,
  selData: number,
  reduxDispatch: (args: { payload: boolean; type: string }) => void
): Promise<ResData | undefined> => {
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    bookTitle +
    "&key=" +
    process.env.REACT_APP_GOOGLE_API_KEY +
    "&maxResults=" +
    searchPace +
    "&startIndex=" +
    selData;

  if (startSearch) {
    try {
      const response = await axios.get(url);
      reduxDispatch(srchCtl.actions.setLoadingData(false));
      return getData(response);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("axios error message: ", err.message);
      } else {
        console.log("unexpected error: ", err);
      }
    }
  }
};

const getData = (response: any) => {
  const booksArr: Array<BookItem> = [];

  if (response.data.items.length > 0) {
    response.data.items.forEach((item: any) => {
      const bookItem: BookItem = {
        authors: item.volumeInfo.authors
          ? item.volumeInfo.authors
          : ["no authors"],
        category: item.volumeInfo.categories
          ? item.volumeInfo.categories
          : ["no category"],
        date: item.volumeInfo.publishedDate,
        description: item.volumeInfo.description,
        id: item.id,
        image: item.volumeInfo.imageLinks,
        title: item.volumeInfo.title,
      };
      booksArr.push(bookItem);
    });

    return { totalItems: response.data.totalItems, items: booksArr };
  }
};
