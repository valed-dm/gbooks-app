import { FC } from "react";
import CatSelect from "../srchParams/CatSelect";
import RelSelect from "../srchParams/RelSelect";
import SearchPace from "../srchParams/SearchPace";
import SubmitBtn from "../buttons/SubmitBtn";
import TitleInput from "../srchParams/TitleInput";

const InputMobile: FC<{ width: number }> = ({ width }) => {
  return (
    <div>
      <div className="book-search-mobile">
        <table style={{ textAlign: "right" }}>
          <tbody>
            <tr>
              <td>book title:&nbsp;</td>
              <td className="mobile-search">
                <TitleInput />
              </td>
            </tr>
            <tr>
              <td>category:&nbsp;</td>
              <td>
                <CatSelect />
              </td>
            </tr>
            <tr>
              <td>ranged by:&nbsp;</td>
              <td>
                <RelSelect />
              </td>
            </tr>
            <tr>
              <td>search pace:&nbsp;</td>
              <td>
                <SearchPace />
              </td>
            </tr>
          </tbody>
        </table>
        {width < 300 ? <SubmitBtn /> : null}
      </div>
    </div>
  );
};

export default InputMobile;
