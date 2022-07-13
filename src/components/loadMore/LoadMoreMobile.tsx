import { FC } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../store/store";

const LoadMoreMobile: FC = () => {
  const reqData = useAppSelector((state: RootState) => state.reqData);
  const resData = useAppSelector((state: RootState) => state.resData);
  const selected = useAppSelector((state: RootState) => state.selData);
  return (
    <div className="mobile-data">
      <span>title: "{reqData.title}";</span>&nbsp;
      <span>cat: "{reqData.catVal.label}";</span>&nbsp;
      <span>order: "{reqData.relVal.label}";</span>
      <br />
      <span>all found: {resData.totalItems};</span>&nbsp;
      <span>selected: {selected} top results;</span>&nbsp;
    </div>
  );
};

export default LoadMoreMobile;
