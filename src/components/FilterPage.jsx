import { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import YokaiCardsContainer from "./YokaiCardsContainer";
import Links from "./Links";

function FilterPage() {
  // App gestiona los estados de la aplicación (ver comentario en Filters.js)
  const [type, setType] = useState("todos");
  const [appearence, setAppearence] = useState("todos");
  const [habitat, setHabitat] = useState("todos");

  return (
    <div className="App">
      <Header />
      <Links></Links>
      <Filters
        type={type}
        appearence={appearence}
        habitat={habitat}
        setType={setType}
        setAppearence={setAppearence}
        setHabitat={setHabitat}
      />
      <YokaiCardsContainer
        type={type}
        appearence={appearence}
        habitat={habitat}
      />
    </div>
  );
}

export default FilterPage;
