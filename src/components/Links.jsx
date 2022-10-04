import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links-header">
      <Link to="/yokai-worship/">
        <h2 className="filters-link">HOME</h2>
      </Link>
      <Link to="/yokai-worship/worship">
        <h2 className="worship-link">WORSHIP</h2>
      </Link>
      <Link to="/yokai-worship/ratings">
        <h2 className="ratings-link">RATINGS</h2>
      </Link>
    </div>
  );
}

export default Links;
