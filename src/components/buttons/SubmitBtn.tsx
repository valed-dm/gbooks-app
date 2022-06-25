import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../store/configureStore";
import { srchCtl } from "../../store/reducers/srchCtlReducer";

const SubmitBtn: FC = () => {
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();
  const { allowSearch } = useSelector((state: AppState) => state.srchCtl);

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
