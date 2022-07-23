/*

Idealmente deberíamos ser capaz de filtrar el array de elementos en este componente,
pero no podemos hacerlo porque vamos a instanciarlo en otro (App.js) y los estados son locales a cada componente.
Por ello, necesitamos hacer que los estados sean globales.

Para ello aquí usamos una técnica que se conoce como "subir el estado",
llevando el control de los mismos (useState) al elemento padre que contenga
todos aquellos componentes que los vayan a necesitar.

*/

// Recogemos las props con destructuring desde App.js
export default function Filters({
  type,
  appearence,
  habitat,
  setType,
  setAppearence,
  setHabitat,
}) {
  function handleTypeSelectChange(e) {
    // Así selecciono el texto del HTML:
    // setType(e.target[e.target.selectedIndex].innerText);
    // Así selecciono el atributo value de la opción del select:
    setType(e.target.value);
  }

  function handleAppearenceSelectChange(e) {
    setAppearence(e.target.value);
  }

  function handleHabitatSelectChange(e) {
    setHabitat(e.target.value);
  }

  return (
    <div className="filters">
      <h1>FILTROS:</h1>
      <div className="filters-select">
        <span>Tipo:</span>
        <select
          name="tipos"
          id="1"
          onChange={handleTypeSelectChange}
          // Value es el valor seleccionado en el select, controlado por React
          // Este valor lo cambiaremos a través de las funciones handle.
          value={type}
        >
          <option value="todos">Todos</option>
          <option value="yokai">Yokai</option>
          <option value="henge yokai">Henge Yokai</option>
          <option value="tsukumogami">Tsukumogami</option>
          <option value="yurei">Yurei</option>
        </select>
        <span>Apariencia:</span>
        <select
          name="apariencias"
          id="2"
          onChange={handleAppearenceSelectChange}
          value={appearence}
        >
          <option value="todos">Todos</option>
          <option value="humana">Humana</option>
          <option value="animal">Animal</option>
          <option value="planta">Planta</option>
          <option value="monstruo">Monstruo</option>
          <option value="objeto">Objeto</option>
        </select>
        <span>Habitat:</span>
        <select
          name="habitats"
          id="3"
          onChange={handleHabitatSelectChange}
          value={habitat}
        >
          <option value="todos">Todos</option>
          <option value="acuático">Acuático</option>
          <option value="montañoso">Montañoso</option>
          <option value="urbano">Urbano</option>
        </select>
      </div>
      <div>{filterPhrase({ type, appearence, habitat })}</div>
    </div>
  );
}

function filterPhrase({ type, appearence, habitat }) {
  if (type === "todos" && appearence === "todos" && habitat === "todos") {
    return <p className="filter-phrase">Mostrando todos los Yokai</p>;
  }

  let headerPhrase = "Mostrando ";

  if (type === "todos") {
    headerPhrase = headerPhrase + "todos los tipos de Yokai.";
  } else {
    headerPhrase = headerPhrase + type;
  }

  if (appearence === "todos") {
    headerPhrase = headerPhrase + " con todas las apariencias";
  } else {
    headerPhrase = headerPhrase + " de apariencia: " + appearence;
  }

  if (habitat === "todos") {
    headerPhrase = headerPhrase + " y todos los habitats.";
  } else {
    headerPhrase = headerPhrase + " y habitat " + habitat + ".";
  }
  return <p className="filter-phrase">{headerPhrase}</p>;
}
