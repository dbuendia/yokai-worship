import { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import YokaiCardsContainer from "./YokaiCardsContainer";

function FilterPage() {
  // Vamos a hacer que App gestione los estados de la aplicación (ver comentario en Filters.js)

  const [type, setType] = useState("todos");
  const [appearence, setAppearence] = useState("todos");
  const [habitat, setHabitat] = useState("todos");
  return (
    <div className="App">
      {/* <div className="app-wrapper"> */}
      <Header type={type} appearence={appearence} habitat={habitat} />
      {/* Pasamos los estados y funciones que los gestionan como props */}
      <Filters
        type={type}
        appearence={appearence}
        habitat={habitat}
        setType={setType}
        setAppearence={setAppearence}
        setHabitat={setHabitat}
      />
      {/* Pasamos los estados y funciones que los gestionan como props */}
      <YokaiCardsContainer
        type={type}
        appearence={appearence}
        habitat={habitat}
      />
      {/* </div> */}
    </div>
  );
}

export default FilterPage;
