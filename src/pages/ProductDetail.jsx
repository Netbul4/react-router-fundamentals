import { useParams, useNavigate } from "react-router-dom";

export function ProductDetail() {
  function getProduct(id) {
    const products = [
      { id: 1, name: "Beer", price: "$2" },
      { id: 2, name: "Cigarrettes", price: "$1" },
      { id: 3, name: "Run", price: "$5" },
      { id: 4, name: "Whiskey", price: "$7" },
    ];

    return products.find((product) => product.id.toString() === id);
  }

  function handleBack(){
    navigate(-1);
  }
  
  const navigate = useNavigate();
  const { id } = useParams();
  const product = getProduct(id);

  return (
    <section>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <h3>Price: {product.price}</h3>
      <button onClick={handleBack}>Go back</button>
    </section>
  );
}
