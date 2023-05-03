import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user, logout, authTokens } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function getCart() {
      try {
        const response = await fetch(
          "http://localhost:8000/product_api/getCart/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(authTokens.access),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCart(data.products);
          console.log(cart);
        } else if (response.status === 401) {
          logout();
        } else {
          // handle other errors
        }
      } catch (error) {
        console.error(error);
      }
    }
    getCart();
  }, [authTokens]);

  return (
    <div className="flex">
      <Link to="/">Home</Link>
      <span> |</span>
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

      <span> |</span>
      {cart && <h3>Cart Items: {cart.length}</h3>}
    </div>
  );
};

export default Header;
