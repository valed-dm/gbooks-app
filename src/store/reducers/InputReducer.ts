import { createSlice } from "@reduxjs/toolkit";
import { cat, rel } from "../../helpers/defaultData";

export const inputData = createSlice({
  name: "inputData",
  initialState: {
    title: "",
    catVal: cat[0],
    relVal: rel[0],
    searchPace: "20",
  },
  reducers: {
    setInitialState: (state, action) => {
      return action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setCatVal: (state, action) => {
      state.catVal = action.payload;
    },
    setRelVal: (state, action) => {
      state.relVal = action.payload;
    },
    setSearchPace: (state, action) => {
      state.searchPace = action.payload;
    },
  },
});
