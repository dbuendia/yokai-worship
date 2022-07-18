import { Link } from "react-router-dom";
export default function Worship() {
  return (
    <div>
      <h1>Worship</h1>
      <div>
        <Link to="/filters">Filters</Link>
      </div>
      <div>
        <Link to="/ratings">Ratings</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
