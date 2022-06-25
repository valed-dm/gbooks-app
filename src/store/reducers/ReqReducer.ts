import { createSlice } from "@reduxjs/toolkit";
import { cat, rel } from "../../helpers/defaultData";

export const reqData = createSlice({
  name: "reqData",
  initialState: {
    title: "no title",
    catVal: cat[0],
    relVal: rel[0],
    searchPace: "20",
  },
  reducers: {
    setReqData: (state, action) => {
      return action.payload;
    },
  },
});
