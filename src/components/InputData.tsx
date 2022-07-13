import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { RootState } from "../store/store";
import { initialState } from "../helpers/defaultData";
import { inputData } from "../store/reducers/InputReducer";
import { selData } from "../store/reducers/SelReducer";
import { srchCtl } from "../store/reducers/srchCtlReducer";
import { reqData } from "../store/reducers/ReqReducer";
import { resData } from "../store/reducers/ResReducer";
import { ResData } from "../models/ResData";
import { getBooks } from "../getAPIData/getBooks";
import InputDesktop from "./inputData/inputDesktop";
import InputMobile from "./inputData/inputMobile";

const InputData: FC = () => {
  const reduxDispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const { allowSearch, startSearch } = useAppSelector(
    (state: RootState) => state.srchCtl
  );
  const { title, catVal, relVal, searchPace } = useAppSelector(
    (state: RootState) => state.inputData
  );
  const selected = useAppSelector((state: RootState) => state.selData);

  useEffect(() => {
    async function fetchBooks() {
      const items: ResData | undefined = await getBooks(
        startSearch,
        title,
        searchPace,
        selected,
        reduxDispatch
      );

      reduxDispatch(resData.actions.setResData(items));
      reduxDispatch(
        reqData.actions.setReqData({ title, catVal, relVal, searchPace })
      );
      reduxDispatch(selData.actions.setSelData(searchPace));
    }

    if (allowSearch) {
      fetchBooks();
      reduxDispatch(inputData.actions.setInitialState(initialState.inputData));
      reduxDispatch(srchCtl.actions.setInitialState(initialState.srchCtl));
      reduxDispatch(srchCtl.actions.setAllowExtraSearch(true));
      console.log("fetchBooks started");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSearch]);

  if (width > 550) {
    // iPad Mini case (768x1024);
    return <InputDesktop />;
  } else {
    return <InputMobile width={width} />;
  }
};

export default InputData;
