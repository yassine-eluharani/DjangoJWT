import { Link } from "react-router-dom";

const Card = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link to={`/products/${product.id}`}>
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <img src={product.image} className="w-full h-1/2" />
            <div className="p-4">
              <p className="font-bold text-gray-700 text-lg leading-6 mb-2">
                {product.name}
              </p>
              <p className="text-gray-600 text-base mb-4">
                {product.description}
              </p>
              <p className="text-lg font-bold text-[#0FB478] mb-2">
                {product.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
