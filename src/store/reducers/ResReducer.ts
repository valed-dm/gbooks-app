import { createSlice } from "@reduxjs/toolkit";

export const resData = createSlice({
  name: "resData",
  initialState: { totalItems: 0, items: [] },
  reducers: {
    setResData: (state, action) => {
      return action.payload;
    },
  },
});
