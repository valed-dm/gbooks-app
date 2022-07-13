import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const sortData = createSlice({
  name: "sortData",
  initialState,
  reducers: {
    setSortData: (state, action) => {
      return action.payload;
    },
  },
});
