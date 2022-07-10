import YokaiCard from "./YokaiCard";
import yokaiData from "../dataset/yokaiData";

// Pasamos las props con destructuring desde App.js
function YokaiCardsContainer({ type, appearence, habitat }) {
  // Filtramos todos los elementos según las opciones de los select.
  // 1. Si el tipo es "todos", metemos el elemento directamente en el array haciendo que la condición devuelva true.

  let filteredYokai = yokaiData
    .filter((yokai) => {
      if (type.toLowerCase() === "todos") {
        return true;
      }
      // 2. Si el tipo del elemento coincide con el tipo de App.
      return yokai.type.toLowerCase() === type;
    })
    .filter((yokai) => {
      if (appearence.toLowerCase() === "todos") {
        return true;
      }
      return yokai.appearence.toLowerCase() === appearence;
    })
    .filter((yokai) => {
      if (habitat.toLowerCase() === "todos") {
        return true;
      }
      return yokai.habitat.toLowerCase() === habitat;
    });

  // let filteredYokaiLowerCase = filteredYokai.map((elem) => {
  //   elem.type = elem.type.toLowerCase();
  //   elem.appearence = elem.appearence.toLowerCase();
  //   elem.habitat = elem.habitat.toLowerCase();
  //   return elem;
  // });

  return (
    <div className="yokai-cards-container">
      {/* Printamos sólo aquellas cards que hayan pasado los filtros */}
      {filteredYokai.map((elem) => (
        <YokaiCard yokai={elem} />
      ))}
    </div>
  );
}

export default YokaiCardsContainer;
