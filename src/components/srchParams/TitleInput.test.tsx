import { cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TitleInput from "./TitleInput";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";
import { initialState } from "../../helpers/defaultData";
import { act } from "react-dom/test-utils";

describe("<TitleInput /> unit test", () => {
  afterEach(() => {
    cleanup();
  });

  const getWrapper = () =>
    renderWithProviders(
      <BrowserRouter>
        <TitleInput />
      </BrowserRouter>,
      { preloadedState: initialState }
    );

  test("at start <TitleInput /> successfully renders; faSearch disabled", () => {
    getWrapper();

    const inputBookTitle = screen.getByRole("searchbox");
    const faSearch = screen.queryByTestId("faSearch");
    expect(inputBookTitle).toBeInTheDocument();
    expect(inputBookTitle).toHaveAttribute("placeholder", "enter book title");
    expect(inputBookTitle).toHaveAttribute("type", "search");
    expect(inputBookTitle).toHaveAttribute("value", "");
    expect(faSearch).not.toBeInTheDocument();
  });

  test("entered book title is displayed; faSearch is enabled (window width > 300)", () => {
    const view = getWrapper();
    const { store: mockedStore } = view;

    global.innerWidth = 301;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    //console.log("innerWidth", global.innerWidth);
    const inputBookTitle = screen.getByRole("searchbox");
    //const faSearch = screen.getByRole("img", {name: "search"}); - it throws an error: we look for an element before an action takes place;
    const bookTitle = "test title";
    userEvent.type(inputBookTitle, bookTitle);
    // eslint-disable-next-line testing-library/no-debugging-utils
    //console.log(view.debug());
    expect(mockedStore.getState().inputData.title).toEqual(bookTitle);
    expect(mockedStore.getState().srchCtl.allowSearch).toEqual(true);
    expect(inputBookTitle).toHaveValue(bookTitle);
    expect(inputBookTitle).toHaveAttribute("value", bookTitle);
    expect(screen.getByTestId("faSearch")).toBeInTheDocument();
  });

  test("setStartSearch(true); setLoadingData(true) are successfully dispatched against redux store", async () => {
    const view = getWrapper();
    const { store: mockedStore } = view;

    const inputBookTitle = screen.getByRole("searchbox");
    const bookTitle = "test title";
    userEvent.type(inputBookTitle, bookTitle);
    userEvent.click(screen.getByTestId("faSearch"));
    expect(mockedStore.getState().srchCtl.startSearch).toEqual(true);
    expect(mockedStore.getState().srchCtl.loadingData).toEqual(true);
  });
});
