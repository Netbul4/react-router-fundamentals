import { Link } from "react-router-dom";

export function Products() {
  const products = [
    { id: 1, name: "Beer", price: "$2" },
    { id: 2, name: "Cigarrettes", price: "$1" },
    { id: 3, name: "Run", price: "$5" },
    { id: 4, name: "Whiskey", price: "$7" },
  ];

  return (
    <section>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
