import { Link, NavLink } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/contact">Contact </Link>
        <Link to="/products">Products </Link>
        <Link to="/services">Services </Link>
        <Link to="/unexist">Error 404 </Link>
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
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/products"
        >
          Products{" "}
        </NavLink>
      </nav>
    </>
  );
}
