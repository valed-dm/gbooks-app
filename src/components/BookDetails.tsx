import { FC, useState, useEffect } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { useParams, useNavigate } from "react-router-dom";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { RootState } from "../store/store";
import { BookItem } from "../models/BookData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

const BookDetails: FC = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { width } = useWindowDimensions();
  const [bookTitle, setBookTitle] = useState<string>();
  const [bookData, setBookData] = useState<JSX.Element>();
  const resData = useAppSelector((state: RootState) => state.resData);
  const sortData = useAppSelector((state: RootState) => state.sortData);

  useEffect(() => {
    let book: JSX.Element;
    let item: BookItem | null;
    let items: Array<BookItem>;

    items = typeof resData.items === "object" ? resData.items : [];
    item = items
      ? items.filter((item: BookItem) => item.id === bookId)[0]
      : null;
    setBookTitle(item?.title);

    book =
      sortData === 0 ? (
        <div>
          <h2>
            No search has been run yet.
            <br />
            Please, enter book title and start your search.
          </h2>
        </div>
      ) : (
        <div style={{ padding: "20px" }}>
          <div>
            <img
              style={{
                borderRadius: "5px",
                boxShadow: "5px 5px 5px DarkSlateGrey",
                float: "left",
                height: "200px",
                margin: "10px 25px 15px 50px",
              }}
              src={
                item?.image && item.image.thumbnail
                  ? item.image.thumbnail
                  : item?.image && item.image.smallThumbnail
                  ? item.image.smallThumbnail
                  : "/no_cover.webp"
              }
              alt="no cover available"
            />
          </div>
          <div>
            <div style={{ textAlign: "left", textIndent: "10px" }}>
              <div>
                <p>
                  -{" "}
                  {item && !isNaN(new Date(item.date).getFullYear())
                    ? new Date(item.date).getFullYear()
                    : "no date available"}{" "}
                  -
                </p>
              </div>
              <div>
                <p>{item?.category}</p>
              </div>
            </div>
            <div>
              <article>{item?.description}</article>
            </div>
            <div>
              <p style={{ textAlign: "right", marginRight: "100px" }}>
                {item?.authors.join(", ")}
              </p>
            </div>
          </div>
        </div>
      );
    setBookData(book);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  const backToMain = () => {
    navigate("/");
  };

  return (
    <div style={{ color: "white" }}>
      <div>
        <div>
          <h2>{bookTitle}</h2>
        </div>
        <br />
        {width > 768 ? (
          <div
            id="back"
            style={{ width: "max-content", margin: "auto" }}
            onClick={backToMain}
          >
            <FontAwesomeIcon icon={faUndoAlt} size="sm" />{" "}
            <span>
              <strong>books</strong>
            </span>
          </div>
        ) : null}
      </div>
      <div>{bookData}</div>
    </div>
  );
};

export default BookDetails;
