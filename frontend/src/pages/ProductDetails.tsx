import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProductDetails = () => {
  const { authTokens } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    getProduct();
    console.log(authTokens);
  }, []);

  const addCart = async () => {
    const response = fetch("http://localhost:8000/product_api/addCart/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${authTokens.access}`,
      },
      body: JSON.stringify({
        id: id,
        quantity: quantity,
      }),
    });
    const data = await response.then((data) => data.json());
    const status = await response.then((res) => res.status.valueOf());
    if (status == 200) {
      setProduct(data);
    } else {
      alert("Something went wrong!!");
    }
  };

  const getProduct = async () => {
    const response = fetch(`http://localhost:8000/product_api/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const data = await response.then((data) => data.json());
    const status = await response.then((res) => res.status.valueOf());
    if (status == 200) {
      setProduct(data);
    } else {
      alert("Something went wrong!!");
    }
  };
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 flex-shrink-0">
          <img
            src={product.image}
            alt="Product"
            className="h-[500px] w-[500px] object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg font-medium text-gray-600 mb-6">
            {product.description}
          </p>
          <div className="flex justify-between items-center mb-6">
            <p className="text-2xl font-bold text-green-600">{product.price}</p>
            <div className="flex items-center space-x-2">
              <label htmlFor="quantity" className="font-medium">
                Qty:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-16 border-gray-300 rounded-md text-sm text-gray-600 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
              />
            </div>
          </div>
          <button
            className="block w-full px-4 py-2 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-md hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            onClick={() => {
              console.log(`Added ${quantity} to cart!`);
              addCart();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
