import "./App.css";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <AuthProvider>
          <Header cart={cart} />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage setCart={setCart} />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart cart={cart} setCart={setCart} />
                </PrivateRoute>
              }
            />

            <Route
              path="/products/:id"
              element={
                <PrivateRoute>
                  <ProductDetails cart={cart} setCart={setCart} />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
