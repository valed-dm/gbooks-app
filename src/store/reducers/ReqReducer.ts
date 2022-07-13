import { createSlice } from "@reduxjs/toolkit";
import { cat, rel } from "../../helpers/defaultData";

const initialState = {
  title: "no title",
  catVal: cat[0],
  relVal: rel[0],
  searchPace: "20",
};

export const reqData = createSlice({
  name: "reqData",
  initialState,
  reducers: {
    setReqData: (state, action) => {
      return action.payload;
    },
  },
});
