import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Articles from "./pages/Articles";
import Homepage from "./pages/Homepage";
import SingleArticle from "./pages/SingleArticle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/topics/:topic" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
