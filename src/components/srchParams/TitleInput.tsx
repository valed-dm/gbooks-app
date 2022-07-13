import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { RootState } from "../../store/store";
import { inputData } from "../../store/reducers/InputReducer";
import { srchCtl } from "../../store/reducers/srchCtlReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TitleInput: FC = () => {
  const navigate = useNavigate();
  const reduxDispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const { title } = useAppSelector((state: RootState) => state.inputData);
  const { allowSearch, loadingData } = useAppSelector(
    (state: RootState) => state.srchCtl
  );
  const selData = useAppSelector((state: RootState) => state.selData);

  const userInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate("/");
    if (selData !== 0) {
      reduxDispatch({ type: "RESET_STORE" });
    }
    reduxDispatch(inputData.actions.setTitle(e.target.value));
    if (!allowSearch) {
      reduxDispatch(srchCtl.actions.setAllowSearch(true));
    }
  };
  const runSearch = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    if (allowSearch && title.length > 0) {
      reduxDispatch(srchCtl.actions.setStartSearch(true));
      if (!loadingData) reduxDispatch(srchCtl.actions.setLoadingData(true));
    }
  };

  return (
    <React.Fragment>
      {" "}
      <div className="book-search-params" onClick={runSearch}>
        <input
          type="search"
          onChange={userInput}
          onKeyPress={(e: React.KeyboardEvent) => {
            if (e.code === "Enter") {
              e.preventDefault();
              runSearch(e);
            }
          }}
          placeholder="enter book title"
          value={title}
        />
        {allowSearch && width > 300 ? (
          <FontAwesomeIcon
            data-testid="faSearch"
            icon={faSearch}
            onClick={runSearch}
            className="fa-search"
          />
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default TitleInput;
