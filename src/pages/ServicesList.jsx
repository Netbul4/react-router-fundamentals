import { Link } from "react-router-dom";

export function ServiceList({ services }) {
  return (
    <>
      <h2>Our Services list</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
