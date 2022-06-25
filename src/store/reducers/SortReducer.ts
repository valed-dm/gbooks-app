import { createSlice } from "@reduxjs/toolkit";

export const sortData = createSlice({
  name: "sortData",
  initialState: 0 as number,
  reducers: {
    setSortData: (state, action) => {
      return action.payload;
    },
  },
});
