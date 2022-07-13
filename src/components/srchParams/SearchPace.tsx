import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../store/store";
import { key, pace } from "../../helpers/defaultData";
import { inputData } from "../../store/reducers/InputReducer";
import Dropdown, { Option } from "react-dropdown";
import OutsideClickHandler from "react-outside-click-handler";
import "react-dropdown/style.css";

const SearchPace: FC = () => {
  const reduxDispatch = useAppDispatch();
  const { allowExtraSearch } = useAppSelector((state: RootState) => state.srchCtl);
  const { searchPace } = useAppSelector((state: RootState) => state.inputData);
  const [pugKey, setPugKey] = useState("0"); //makes dropdown close by its key change

  const searchPaceOnChange = (selected: Option) => {
    reduxDispatch(inputData.actions.setSearchPace(selected.label));
  };

  return (
    <React.Fragment>
      <OutsideClickHandler
        onOutsideClick={() => {
          setPugKey(key());
        }}
      >
        <Dropdown
          arrowClassName="arrow"
          className="select-style"
          disabled={allowExtraSearch}
          key={pugKey}
          options={pace}
          onChange={searchPaceOnChange}
          value={searchPace}
        />
      </OutsideClickHandler>
    </React.Fragment>
  );
};

export default SearchPace;
