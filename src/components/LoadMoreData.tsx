import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { AppState } from "../store/configureStore";
import { ResData } from "../models/ResData";
import { getBooks } from "../getAPIData/getBooks";
import { srchCtl } from "../store/reducers/srchCtlReducer";
import { selData } from "../store/reducers/SelReducer";
import { resData } from "../store/reducers/ResReducer";
import ExtraButton from "./buttons/ExtraBtn";
import LoadMoreDesktop from "./loadMore/LoadMoreDesktop";
import LoadMoreMobile from "./loadMore/LoadMoreMobile";

const LoadMoreData: FC = () => {
  const { width } = useWindowDimensions();
  const { allowExtraSearch, startExtraSearch } = useSelector(
    (state: AppState) => state.srchCtl
  );
  const reqData = useSelector((state: AppState) => state.reqData);
  const responseData = useSelector((state: AppState) => state.resData);
  const selectedData = useSelector((state: AppState) => state.selData);
  const reduxDispatch = useDispatch();

  useEffect(() => {
    async function fetchExtraBooks() {
      if (
        startExtraSearch &&
        reqData &&
        reqData.title.length !== 0 &&
        reqData.title !== "no title"
      ) {
        const extraItems: ResData | undefined = await getBooks(
          startExtraSearch,
          reqData.title,
          reqData.searchPace,
          selectedData,
          reduxDispatch
        );
        if (
          responseData &&
          typeof responseData?.items !== "string" &&
          typeof extraItems !== "string"
        ) {
          reduxDispatch(
            resData.actions.setResData({
              totalItems: extraItems?.totalItems,
              items: [
                ...responseData.items,
                ...(extraItems ? extraItems.items : []),
              ],
            })
          );
          reduxDispatch(
            selData.actions.setSelData(
              Number(reqData.searchPace) + Number(selectedData)
            )
          );
          reduxDispatch(srchCtl.actions.setStartExtraSearch(false));
        }
      }
    }

    if (allowExtraSearch && startExtraSearch) {
      console.log("fetchExtraBooks started");
      fetchExtraBooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startExtraSearch]);

  if (width > 770) {
    return (
      <div className="book-search">
        <LoadMoreDesktop />
        <ExtraButton />
      </div>
    );
  } else {
    return reqData.title === "no title" ? null : (
      <div style={{ marginBottom: "5px" }}>
        <LoadMoreMobile />
        <ExtraButton />
      </div>
    );
  }
};

export default LoadMoreData;
