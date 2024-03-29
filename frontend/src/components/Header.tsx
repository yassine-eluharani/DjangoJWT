import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = ({ cart }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex">
      <Link
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
        to="/"
      >
        Home
      </Link>
      {user && (
        <>
          <span> |</span>
          <Link
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
            to="/cart"
          >
            Cart {cart.length > 0 ? cart.length : " "}
          </Link>
        </>
      )}
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
    </div>
  );
};

export default Header;
