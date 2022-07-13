import { createSlice } from "@reduxjs/toolkit";

const initialState = { totalItems: 0, items: [] };

export const resData = createSlice({
  name: "resData",
  initialState,
  reducers: {
    setResData: (state, action) => {
      return action.payload;
    },
  },
});
