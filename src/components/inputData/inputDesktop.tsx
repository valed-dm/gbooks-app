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
            <label>book title</label>
            <br />
            <TitleInput />
          </div>
          <div className="book-search-params">
            <div className="dropdown" id="category">
              <label>category</label>
              <CatSelect />
            </div>
            <div className="dropdown" id="ranged">
              <label>ranged by</label>
              <RelSelect />
            </div>
            <div className="dropdown" id="pug">
              <label>search pace</label>
              <SearchPace />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputDesktop;
