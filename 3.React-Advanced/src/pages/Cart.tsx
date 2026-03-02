import { useDispatch,  } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
}

export default function Cart() {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

   useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
     <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>$ {product.price}</p>

          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.images[0],
                })
              )
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}