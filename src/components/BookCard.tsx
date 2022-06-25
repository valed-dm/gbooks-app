import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BookItem } from "../models/BookData";

const smallText = {
  fontSize: "0.7em",
  fontStyle: "italic",
};

const BookCard: FC<{ item: BookItem }> = ({ item }): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className="column"
      onClick={() => {
        navigate(`/bookDetails/${item.id}`);
      }}
    >
      <img
        className="book-image"
        src={
          item.image && item.image.thumbnail
            ? item.image.thumbnail
            : item.image && item.image.smallThumbnail
            ? item.image.smallThumbnail
            : "/no_cover.webp"
        }
        alt="no cover available"
      />
      <p>{item.category.join(", ")}</p>
      <p>
        <strong>
          {item.title && item.title.length > 35
            ? item.title.slice(0, 35).concat(" ...")
            : item.title}
          <br />-{" "}
          {item && !isNaN(new Date(item.date).getFullYear()) ? (
            new Date(item.date).getFullYear()
          ) : (
            <span style={smallText}>no date available</span>
          )}{" "}
          -
        </strong>
      </p>
      <p style={smallText}>
        {item.authors && item.authors.length > 2
          ? item.authors
              .slice(0, 2)
              .join(", ")
              .concat(` ...(+${item.authors.length - 2})`)
          : item.authors.join(", ")}
      </p>
    </div>
  );
};

export default BookCard;
