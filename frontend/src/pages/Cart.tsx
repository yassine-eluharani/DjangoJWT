import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const Cart = () => {
  const { authTokens, logout, setCartItems, cartItems } =
    useContext(AuthContext);
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
          setCartItems(data.products.length);
        } else if (response.status === 401) {
          logout();
        }
      } catch (error) {
        console.error(error);
      }
    }
    getCart();
  }, [authTokens, cartItems]);

  const deleteProduct = async (product_id) => {
    const response = fetch(`http://localhost:8000/product_api/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        id: product_id,
      }),
    });
    const status = await response.then((res) => res.status.valueOf());
    if (status == 200) {
      setCartItems(cartItems.length);
    } else {
      alert("Something went wrong!!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {cartItems > 0 ? (
        <h1 className="text-3xl font-bold mb-4">
          Cart total items: {cartItems}
        </h1>
      ) : (
        " "
      )}
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-40 w-40">
                    <img
                      className="h-50 w-50 rounded-md object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
              <td>
                <button
                  className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
