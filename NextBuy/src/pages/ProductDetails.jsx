import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
  };

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} className="h-64 object-contain" />

      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="mt-4">{product.description}</p>
        <p className="mt-4 text-xl font-semibold">₹ {product.price}</p>

        <button
          onClick={addToCart}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
