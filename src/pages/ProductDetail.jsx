import { useParams, useNavigate } from "react-router-dom";

export function ProductDetail({ products }) {
  function handleBack() {
    navigate(-1);
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  return (
    <section>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <h3>Price: {product.price}</h3>
      <button onClick={handleBack}>Go back</button>
    </section>
  );
}
