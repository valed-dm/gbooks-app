import { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/configureStore";

const LoadMoreDesktop: FC = () => {
  const reqData = useSelector((state: AppState) => state.reqData);
  const resData = useSelector((state: AppState) => state.resData);
  const selected = useSelector((state: AppState) => state.selData);
  const sortData = useSelector((state: AppState) => state.sortData);

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
