import "../src/styles/App.css";
import Header from "./components/header";
import Filters from "./components/filters";
import YokaiCardsContainer from "./components/yokaiCardsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <YokaiCardsContainer />
    </div>
  );
}

export default App;
