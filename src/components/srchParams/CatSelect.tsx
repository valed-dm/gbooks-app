import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../store/store";
import { key, cat } from "../../helpers/defaultData";
import { inputData } from "../../store/reducers/InputReducer";
import Dropdown, { Option } from "react-dropdown";
import OutsideClickHandler from "react-outside-click-handler";
import "react-dropdown/style.css";

const CatSelect: FC = () => {
  const reduxDispatch = useAppDispatch();
  const { allowExtraSearch } = useAppSelector((state: RootState) => state.srchCtl);
  const { catVal } = useAppSelector((state: RootState) => state.inputData);
  const [catKey, setCatKey] = useState("0"); //makes dropdown close by its key change

  const catOnChange = (selected: Option) => {
    reduxDispatch(
      inputData.actions.setCatVal({
        value: selected.value,
        label: selected.label,
      })
    );
  };

  return (
    <React.Fragment>
      <OutsideClickHandler
        onOutsideClick={() => {
          setCatKey(key());
        }}
      >
        <Dropdown
          arrowClassName="arrow"
          className="select-style"
          disabled={allowExtraSearch}
          key={catKey}
          options={cat}
          onChange={catOnChange}
          value={catVal}
        />
      </OutsideClickHandler>
    </React.Fragment>
  );
};

export default CatSelect;
