import logo from "../src/img/logo.svg";
import "../src/styles/App.css";
import YokaiCard from "./components/yokaiCard";
import yokaiData from "./dataset/yokaiData";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <YokaiCard yokaiDetails={yokaiData} />
    </div>
  );
}

export default App;
