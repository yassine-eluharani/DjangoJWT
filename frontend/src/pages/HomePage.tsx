import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import ProductList from "../components/ProductList";

const HomePage = ({ setCart }) => {
  const { user, authTokens } = useContext(AuthContext);

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
        }
      } catch (error) {
        console.error(error);
      }
    }
    getCart();
  }, []);

  return (
    <div>
      <p>Logged in As: {user.username}</p>
      <ProductList />
    </div>
  );
};

export default HomePage;
