export const cat = [
  { value: "1", label: "all" },
  { value: "2", label: "art" },
  { value: "3", label: "biography" },
  { value: "4", label: "computers" },
  { value: "5", label: "cooking" },
  { value: "6", label: "education" },
  { value: "7", label: "fiction" },
  { value: "8", label: "history" },
  { value: "9", label: "medical" },
  { value: "10", label: "poetry" },
  { value: "11", label: "science" },
];

export const rel = [
  { value: "12", label: "relevance" },
  { value: "13", label: "newest" },
];

export const pace = [
  { value: "14", label: "10" },
  { value: "15", label: "20" },
  { value: "16", label: "30" },
  { value: "17", label: "40" },
];

export const key = (): string => {
  return Math.floor(Math.random() * 10000).toString();
};

export const initialState = {
  srchCtl: {
    allowSearch: false,
    startSearch: false,
    allowExtraSearch: false,
    startExtraSearch: false,
    loadingData: false,
  },
  inputData: {
    title: "",
    catVal: cat[0],
    relVal: rel[0],
    searchPace: "20",
  },
  reqData: {
    title: "no title",
    catVal: cat[0],
    relVal: rel[0],
    searchPace: "20",
  },
  resData: { totalItems: 0, items: [] },
  selData: 0,
  sortData: 0,
};
