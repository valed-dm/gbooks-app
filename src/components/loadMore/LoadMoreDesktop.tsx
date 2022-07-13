import { FC } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../store/store";

const LoadMoreDesktop: FC = () => {
  const reqData = useAppSelector((state: RootState) => state.reqData);
  const resData = useAppSelector((state: RootState) => state.resData);
  const selected = useAppSelector((state: RootState) => state.selData);
  const sortData = useAppSelector((state: RootState) => state.sortData);

  return (
    <div style={{ marginTop: "5px" }}>
      <div className="book-search-data">
        <div
          style={{
            marginRight: "30px",
            textAlign: "left",
            fontSize: ".6em",
          }}
        >
          <ul>
            <li>book title: "{reqData.title}"</li>
            <li>book category: "{reqData.catVal.label}"</li>
            <li>result ranged by: "{reqData.relVal.label}"</li>
          </ul>
        </div>
        <div
          style={{
            marginRight: "30px",
            textAlign: "left",
            fontSize: ".6em",
          }}
        >
          <ul>
            <li>result: {resData.totalItems} items found</li>
            <li>
              on page: {sortData} filtered&#42; of {selected} top results
              selected
            </li>
            <li>search by: next {reqData.searchPace} items at once</li>
          </ul>
        </div>
      </div>
      <div>
        <p
          style={{
            fontSize: ".6em",
            fontStyle: "italic",
            marginLeft: "-20px",
          }}
        >
          &#42; excluded &#8220;no author&#8221;, &#8220;no category&#8221;,
          &#8220;no title&#8221;, &#8220;no date&#8221;, &#8220;no id &amp;
          title duplicated.&#8221;
        </p>
      </div>
    </div>
  );
};

export default LoadMoreDesktop;
