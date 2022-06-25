import { FC } from "react";
import InputData from "./InputData";
import LoadMoreData from "./LoadMoreData";

const BookSearch: FC = () => {
  return (
    <div>
      <InputData />
      <LoadMoreData />
    </div>
  );
};

export default BookSearch;
