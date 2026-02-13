import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Welcome, {user?.email}
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2>Total Products</h2>
          <p className="text-2xl">{products.length}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h2>Cart Items</h2>
          <p className="text-2xl">
            {JSON.parse(localStorage.getItem("cart"))?.length || 0}
          </p>
        </div>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
