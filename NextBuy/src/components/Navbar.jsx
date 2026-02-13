import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();        // clear user
    navigate("/login");   // redirect to home
  };

  return (
    <nav className="text-white p-4 bg-gradient-to-r from-red-950 to-pink-600">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold">
          NextBuy
        </Link>

        <div className="space-x-4 flex items-center">

          <Link to="/products">Products</Link>

          {/* Show Cart only if logged in */}
          {user && <Link to="/cart">Cart</Link>}

          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>

              <span className="text-sm">{user.email}</span>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
