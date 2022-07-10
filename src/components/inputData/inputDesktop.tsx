import CatSelect from "../srchParams/CatSelect";
import RelSelect from "../srchParams/RelSelect";
import SearchPace from "../srchParams/SearchPace";
import TitleInput from "../srchParams/TitleInput";

const InputDesktop = () => {
  return (
    <div>
      <form>
        <div className="book-search">
          <div>
            <span>Book title</span>
            <br />
            <TitleInput />
          </div>
          <div className="book-search-params">
            <div className="dropdown" id="category">
              <span>category</span>
              <CatSelect />
            </div>
            <div className="dropdown" id="ranged">
              <span>ranged by</span>
              <RelSelect />
            </div>
            <div className="dropdown" id="pug">
              <span>search pace</span>
              <SearchPace />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputDesktop;
