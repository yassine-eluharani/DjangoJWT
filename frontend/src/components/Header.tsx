import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user, logout, authTokens } = useContext(AuthContext);
  const [cart, setCart] = useState({});
  useEffect(() => {
    getCart();
    console.log(cart);
  }, []);
  const getCart = async () => {
    const response = await fetch("http://localhost:8000/product_api/getCart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    const data = await response.json();

    if (response.status === 200) {
      setCart(data);
      console.log(cart);
    } else if (response.statusText === "Unauthorized") {
      logout();
    }
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <span>|</span>
      {user ? (
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
