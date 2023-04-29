import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import AuthContext from "../context/AuthContext";

const ProductList = () => {
  const { authTokens, logout } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const response = await fetch("http://localhost:8000/product_api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      setProducts(data);
    } else if (response.statusText === "Unauthorized") {
      logout();
    }
  };

  return (
    <div>
      <Card products={products} />
    </div>
  );
};

export default ProductList;
