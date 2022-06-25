import _uniqBy from "lodash/uniqBy";
import { BookItem } from "../models/BookData";

const cond = (item: BookItem, category: string): boolean => {
  let crit: boolean = true;

  if (category !== "all") {
    if (item.category.length !== 0) {
      crit = item.category[0].toLowerCase() === category;
    }
    if (item.authors[0] === "no authors") {
      crit = false;
    }
    if (item.category[0] === "no category") {
      crit = false;
    }
    if (typeof item.title === "undefined") {
      crit = false;
    }
    if (typeof item.date === "undefined") {
      crit = false;
    }
  } else {
    if (item.authors[0] === "no authors") {
      crit = false;
    }
    if (item.category[0] === "no category") {
      crit = false;
    }
    if (typeof item.title === "undefined") {
      crit = false;
    }
    if (typeof item.date === "undefined") {
      crit = false;
    }
  }
  return crit;
};

export const sort = (
  items: Array<BookItem>,
  newest: string,
  category: string
): Array<BookItem> => {
  let result = [...items];

  if (newest === "newest") {
    result.sort(function (a: BookItem, b: BookItem) {
      let dateA: any = a.date ? new Date(a.date) : new Date("1900-01-01");
      let dateB: any = b.date ? new Date(b.date) : new Date("1900-01-01");
      return dateB - dateA;
    });
  }

  //let y = ( [{'x': 2 }, { 'x': 2 }, { 'x': 1 }]);
  //let filtered = _uniqBy(y, "x")
  //console.log("lodash filtered", filtered); //sample of _uniqBy usage;
  result = result.filter((item) => cond(item, category));
  let uniqByIdResult = _uniqBy(result, "id"); //removes results with id duplicated;
  let uniqByTitleResult = _uniqBy(uniqByIdResult, (i: any) =>
    i.title.toLowerCase()
  ); //removes results with title duplicated;

  return uniqByTitleResult;
};
