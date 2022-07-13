import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../store/store";
import { sort } from "../helpers/sorting";
import BookCard from "./BookCard";
import { sortData } from "../store/reducers/SortReducer";

// simple download indicator;
const Loading = () => {
  return (
    <div style={{ display: "flex", alignContent: "center" }}>loading ...</div>
  );
};

const Books: FC = () => {
  const reduxDispatch = useAppDispatch();
  const reqData = useAppSelector((state: RootState) => state.reqData);
  const resData = useAppSelector((state: RootState) => state.resData);
  const { loadingData } = useAppSelector((state: RootState) => state.srchCtl);
  const [sorted, setSorted] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const items = typeof resData.items === "object" ? [...resData.items] : [];
    const newest = reqData.relVal.label;
    const category = reqData.catVal.label;

    if (typeof resData.items === "object") {
      const sorting = sort(items, newest, category);
      reduxDispatch(sortData.actions.setSortData(sorting.length));
      const books = sorting.map((item, index) => (
        <BookCard item={item} key={index} />
      ));
      setSorted(books);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resData.items]);

  return (
    <div>
      <h2 id="searchInfo">
        {loadingData ? (
          <div style={{ margin: "auto", width: "max-content" }}>
            <Loading />
          </div>
        ) : sorted.length !== 0 && !loadingData ? (
          `Books on your request: ${sorted.length}`
        ) : reqData.title !== "no title" &&
          sorted.length === 0 &&
          !loadingData ? (
          "try other search params"
        ) : (
          "please enter book title"
        )}
      </h2>
      <div className="row">{sorted}</div>
    </div>
  );
};

export default Books;
