import "../src/styles/App.css";
import FilterPage from "./components/FilterPage";
import Home from "./components/Home";
import Ratings from "./components/Ratings";
import Worship from "./components/Worship";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log("Test");
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="filters" element={<FilterPage />} />
        <Route path="ratings" element={<Ratings />} />
        <Route path="worship" element={<Worship />} />
      </Routes>
    </div>
  );
}

export default App;
