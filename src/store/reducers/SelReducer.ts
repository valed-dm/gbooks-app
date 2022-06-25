import { createSlice } from "@reduxjs/toolkit";

export const selData = createSlice({
  name: "selData",
  initialState: 0 as number,
  reducers: {
    setSelData: (state, action) => {
      return action.payload;
    },
  },
});
