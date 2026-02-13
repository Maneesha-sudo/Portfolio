import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProductCard({ product }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Get existing cart
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        { ...product, quantity: 1 },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/cart");
  };

  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />

      <h3 className="mt-4 font-semibold line-clamp-2">
        {product.title}
      </h3>

      <p className="mt-2 font-bold text-blue-600">
        ₹ {product.price}
      </p>

      {/* View Details */}
      <Link
        to={`/products/${product.id}`}
        className="block mt-3 bg-gray-200 text-center py-2 rounded hover:bg-gray-300"
      >
        View Details
      </Link>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="block w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
