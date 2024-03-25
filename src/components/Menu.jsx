import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact </Link>
    </nav>
  );
}
