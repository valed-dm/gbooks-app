import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../store/configureStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import InputData from "../InputData";
import LoadMoreData from "../LoadMoreData";

const MobileHeader: FC = () => {
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { allowExtraSearch } = useSelector((state: AppState) => state.srchCtl);

  const backToMain = (e: React.MouseEvent<Element, MouseEvent>) => {
    navigate("/");
  };
  const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowMenu(!showMenu);
  };
  const onRequestClose = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setShowMenu(false);
  };
  const reset = (e: React.MouseEvent<Element, MouseEvent>) => {
    reduxDispatch({ type: "RESET_STORE" });
    navigate("/");
  };

  return (
    <div>
      {" "}
      <header>
        <React.Fragment>
          <ReactModal
            className="modal-menu"
            isOpen={showMenu}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
          >
            <div style={{ textAlign: "center" }}>
              <span>This menu is under construction</span>{" "}
              {/*it is a placeholder for some new features coming*/}
              {/*and a way to test implementation of ReactModal*/}
            </div>
          </ReactModal>
        </React.Fragment>
        <div className="header-mobile">
          <div className="faIcon">
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              onClick={(e) => {
                onClickToggle(e);
              }}
            />
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <h1>Google Books API app</h1>
          </div>
          <div className="faIcon">
            <FontAwesomeIcon
              icon={faUndoAlt}
              size="lg"
              onClick={(e) => {
                if (
                  document.getElementById("searchInfo")?.innerHTML ===
                    "try other search params" ||
                  document
                    .getElementById("searchInfo")
                    ?.innerHTML.slice(0, 21) === "Books on your request"
                ) {
                  reset(e);
                } else {
                  backToMain(e);
                }
              }}
            />
          </div>
        </div>
        <div>{allowExtraSearch ? <LoadMoreData /> : <InputData />}</div>
      </header>
    </div>
  );
};

export default MobileHeader;
