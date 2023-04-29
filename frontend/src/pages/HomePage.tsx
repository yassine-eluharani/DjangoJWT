import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <p>{user.username}'s notes: </p>
      <ProductList />
    </div>
  );
};

export default HomePage;
