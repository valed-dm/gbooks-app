import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../store/configureStore";
import { srchCtl } from "../../store/reducers/srchCtlReducer";

const ExtraBtn: FC = () => {
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();
  const { allowExtraSearch, loadingData } = useSelector(
    (state: AppState) => state.srchCtl
  );
  const resData = useSelector((state: AppState) => state.resData);
  const reqData = useSelector((state: AppState) => state.reqData);

  const runExtraSearch = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    navigate("/");

    if (
      allowExtraSearch &&
      reqData &&
      reqData.title.length > 0 &&
      reqData.title !== "no title"
    ) {
      reduxDispatch(srchCtl.actions.setStartExtraSearch(true));
      if (!loadingData) reduxDispatch(srchCtl.actions.setLoadingData(true));
    }
  };

  return (
    <React.Fragment>
      <button
        disabled={!allowExtraSearch}
        onClick={runExtraSearch}
        style={{
          backgroundColor: allowExtraSearch ? "white" : "transparent",
          border: "none",
          borderRadius: "3px",
          color: allowExtraSearch ? "black" : "transparent",
          marginBottom: "5px",
          width: "12em",
        }}
        type="submit"
      >
        filter next {resData.totalItems === 0 ? null : reqData.searchPace}{" "}
        result items
      </button>
    </React.Fragment>
  );
};

export default ExtraBtn;
