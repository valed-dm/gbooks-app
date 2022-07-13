import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const selData = createSlice({
  name: "selData",
  initialState,
  reducers: {
    setSelData: (state, action) => {
      return action.payload;
    },
  },
});
