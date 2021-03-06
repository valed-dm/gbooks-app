import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
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

export const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_STORE") {
    state = initialState;
  }
  return appReducers(state, action);
};

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    /* example: gDM stands for getDefaultMiddleware;
    middleware: (gDM) =>
    gDM({
      serializableCheck: false,
    }).concat(thunk),
    */
    devTools: process.env.NODE_ENV !== "production",
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
