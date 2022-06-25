import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/configureStore";
import { key, rel } from "../../helpers/defaultData";
import { inputData } from "../../store/reducers/InputReducer";
import Dropdown, { Option } from "react-dropdown";
import OutsideClickHandler from "react-outside-click-handler";
import "react-dropdown/style.css";

const RelSelect: FC = () => {
  const reduxDispatch = useDispatch();
  const { allowExtraSearch } = useSelector((state: AppState) => state.srchCtl);
  const { relVal } = useSelector((state: AppState) => state.inputData);
  const [relKey, setRelKey] = useState("0"); //makes dropdown close by its key change

  const relOnChange = (selected: Option) => {
    reduxDispatch(
      inputData.actions.setRelVal({
        value: selected.value,
        label: selected.label,
      })
    );
  };

  return (
    <React.Fragment>
      <OutsideClickHandler
        onOutsideClick={() => {
          setRelKey(key());
        }}
      >
        <Dropdown
          arrowClassName="arrow"
          className="select-style"
          disabled={allowExtraSearch}
          key={relKey}
          options={rel}
          onChange={relOnChange}
          value={relVal}
        />
      </OutsideClickHandler>
    </React.Fragment>
  );
};

export default RelSelect;
