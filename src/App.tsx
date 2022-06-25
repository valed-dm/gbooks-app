import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import DeskTopHeader from "./components/headers/DeskTopHeader";
import MobileHeader from "./components/headers/MobileHeader";
import "./App.css";

const App: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="app">
      {width > 768 ? <DeskTopHeader /> : <MobileHeader />}
      <main className="app-body">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/bookDetails/:bookId" element={<BookDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
