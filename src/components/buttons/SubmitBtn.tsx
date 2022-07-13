import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { srchCtl } from "../../store/reducers/srchCtlReducer";

const SubmitBtn: FC = () => {
  const navigate = useNavigate();
  const reduxDispatch = useAppDispatch();
  const { allowSearch } = useAppSelector((state: RootState) => state.srchCtl);

  const runSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");

    if (allowSearch) {
      reduxDispatch(srchCtl.actions.setStartSearch(true));
    }
  };

  return (
    <React.Fragment>
      <button
        onClick={runSearch}
        style={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "3px",
          color: "black",
          marginBottom: "5px",
          width: "12em",
        }}
        type="submit"
      >
        start search
      </button>
    </React.Fragment>
  );
};

export default SubmitBtn;

//is in use: inputData/InputMobile on conditon: {width < 300 ? <SubmitBtn /> : null}
