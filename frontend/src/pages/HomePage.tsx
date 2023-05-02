import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <p>Logged in As: {user.username}</p>
      <ProductList />
    </div>
  );
};

export default HomePage;
