import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { initialState } from "../helpers/defaultData";
import { srchCtl } from "./reducers/srchCtlReducer";
import { selData } from "./reducers/SelReducer";
import { sortData } from "./reducers/SortReducer";
import { inputData } from "./reducers/InputReducer";
import { reqData } from "./reducers/ReqReducer";
import { resData } from "./reducers/ResReducer";
//import thunk from "redux-thunk"; - example

const appReducers = combineReducers({
  srchCtl: srchCtl.reducer, // start/stop search/extra search, download indicator;
  selData: selData.reducer, // qty of top results for further processing;
  reqData: reqData.reducer, // user request params saved;
  resData: resData.reducer, // array of items found/+new chunk of data from API;
  sortData: sortData.reducer, // qty of books after all sorting;
  inputData: inputData.reducer, // current input/selectors data;
});
const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_STORE") {
    state = initialState;
  }
  return appReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  /* example: gDM stands for getDefaultMiddleware;
  preloadedState: initialState,
  middleware: (gDM) =>
    gDM({
      serializableCheck: false,
    }).concat(thunk),
  */
  devTools: process.env.NODE_ENV !== "production",
});

export type AppState = ReturnType<typeof rootReducer>;

export default store;
