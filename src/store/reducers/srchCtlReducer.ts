import { createSlice } from "@reduxjs/toolkit";

export const srchCtl = createSlice({
  name: "srchCtl",
  initialState: {
    allowSearch: false,
    startSearch: false,
    allowExtraSearch: false,
    startExtraSearch: false,
    loadingData: false,
  },
  reducers: {
    setInitialState: (state, action) => {
      return action.payload;
    },
    setAllowSearch: (state, action) => {
      state.allowSearch = action.payload;
    },
    setStartSearch: (state, action) => {
      state.startSearch = action.payload;
    },
    setAllowExtraSearch: (state, action) => {
      state.allowExtraSearch = action.payload;
    },
    setStartExtraSearch: (state, action) => {
      state.startExtraSearch = action.payload;
    },
    setLoadingData: (state, action) => {
      state.loadingData = action.payload;
    },
  },
});
