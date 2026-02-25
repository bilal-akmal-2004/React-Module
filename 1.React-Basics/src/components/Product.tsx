import type { ProductProps } from "../types/product";

function ProductCard({ title, price, image }: ProductProps) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <button className="product-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;