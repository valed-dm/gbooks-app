import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { srchCtl } from "../../store/reducers/srchCtlReducer";

const ExtraBtn: FC = () => {
  const navigate = useNavigate();
  const reduxDispatch = useAppDispatch();
  const { allowExtraSearch, loadingData } = useAppSelector(
    (state: RootState) => state.srchCtl
  );
  const resData = useAppSelector((state: RootState) => state.resData);
  const reqData = useAppSelector((state: RootState) => state.reqData);

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
