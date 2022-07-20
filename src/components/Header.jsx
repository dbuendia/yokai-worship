import { Link } from "react-router-dom";

function Header({ type, appearence, habitat }) {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="kanji">妖怪の世界</h1>
      </Link>
      <div>{defineHeader({ type, appearence, habitat })}</div>
    </div>
  );
}

export default Header;

function defineHeader({ type, appearence, habitat }) {
  if (type === "todos" && appearence === "todos" && habitat === "todos") {
    return <p className="header-phrase">Mostrando todos los Yokai</p>;
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
  return <p className="header-phrase">{headerPhrase}</p>;
}
