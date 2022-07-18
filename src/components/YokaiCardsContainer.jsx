import YokaiCard from "./YokaiCard";
import yokaiData from "../dataset/yokaiData";

// Pasamos las props con destructuring desde App.js
function YokaiCardsContainer({ type, appearence, habitat }) {
  // Filtramos todos los elementos según las opciones de los select con 3 filter encadenados
  // 1. Si el tipo es "todos", metemos el elemento directamente en el array haciendo que la condición devuelva true.
  let filteredYokai = yokaiData
    .filter((yokai) => {
      if (type.toLowerCase() === "todos") {
        return true;
      }
      // 2. Si el tipo del elemento coincide con el tipo de App.
      // 3. Hacemos las comparaciones en LowerCase para que no haya problemas al comaprarse con el value de las options.
      return yokai.type.toLowerCase() === type;
    })
    // El resultado del return se filtra de manera encadenada en el siguiente .filter
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

  return (
    <div className="yokai-cards-container">
      {/* Printamos sólo aquellas cards que hayan pasado los filtros seleccionados */}
      {filteredYokai.map((elem) => (
        // Esta prop yokai se pasará a YokaiCard y contiene todas las propiedades de cada objeto que nos llega por el dataset.
        <YokaiCard yokai={elem} />
      ))}
    </div>
  );
}

export default YokaiCardsContainer;
