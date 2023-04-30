const Card = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
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
            <button className="block w-full px-4 py-2 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-md hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
