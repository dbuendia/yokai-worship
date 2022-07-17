import { Link } from "react-router-dom";
export default function Ratings() {
  return (
    <div>
      <h1>Ratings</h1>
      <div>
        <Link to="/filters">Filters</Link>
      </div>
      <div>
        <Link to="/worship">Worship</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
