export default function ProductCard({ product }) {
  return (
    <div className="card">
      <h2 className="title">{product.title}</h2>
      <p className="owner">{product.owner}</p>
      <p className="price">${product.price}</p>
    </div>
  );
}
