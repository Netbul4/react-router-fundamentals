import { Link, Outlet } from "react-router-dom";

export function Services() {
  return (
    <>
      <h1>Services</h1>
      <vav className="menu">
        <Link to="/services"></Link>
        <Link to="/services/list"></Link>
        <Link to="/services/warranty"></Link>
        <Link to="/services/politics"></Link>
      </vav>
      <Outlet />
    </>
  );
}
