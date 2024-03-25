import { Link, NavLink } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact </Link>
      </nav>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/contact"
        >
          Contact{" "}
        </NavLink>
      </nav>
    </>
  );
}
