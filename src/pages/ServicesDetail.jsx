import { useParams, useNavigate } from "react-router-dom";

export function ServiceDetail({ services }) {
  function handleBack() {
    navigate(-1);
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const service = services.find((service) => service.id.toString() === id);

  return (
    <section>
      <h1>Service Details</h1>
      <h2>{service.name}</h2>
      <h3>Price: {service.price}</h3>
      <button onClick={handleBack}>Go back</button>
    </section>
  );
}
