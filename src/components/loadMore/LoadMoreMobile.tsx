import { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/configureStore";

const LoadMoreMobile: FC = () => {
  const reqData = useSelector((state: AppState) => state.reqData);
  const resData = useSelector((state: AppState) => state.resData);
  const selected = useSelector((state: AppState) => state.selData);
  return (
    <div className="mobile-data">
      <span>title: "{reqData.title}";</span>&nbsp;
      <br />
      <span>cat: "{reqData.catVal.label}";</span>&nbsp;
      <span>order: "{reqData.relVal.label}";</span>
      <br />
      <span>all found: {resData.totalItems};</span>&nbsp;
      <span>selected: {selected} top results;</span>&nbsp;
    </div>
  );
};

export default LoadMoreMobile;
