import "../src/styles/App.css";
import FilterPage from "./components/FilterPage";
import Ratings from "./components/Ratings";
import Worship from "./components/Worship";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/yokai-worship/" element={<FilterPage />} />
        <Route path="/yokai-worship/rating/" element={<Ratings />} />
        <Route path="/yokai-worship/worship/" element={<Worship />} />
      </Routes>
    </div>
  );
}

export default App;
