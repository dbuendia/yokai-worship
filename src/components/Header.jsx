import { Link } from "react-router-dom";

function Header({ type, appearence, habitat }) {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="kanji">
          妖怪<div>けぐあい!</div>
        </h1>
      </Link>
    </div>
  );
}

export default Header;
