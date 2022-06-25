import BookSearch from "../BookSearch";

const DeskTopHeader = () => {
  return (
    <header className="app-header">
      <h1>Google Books API app</h1>
      <BookSearch />
    </header>
  );
};

export default DeskTopHeader;
