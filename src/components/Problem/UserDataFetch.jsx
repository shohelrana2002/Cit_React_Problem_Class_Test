import React, { useEffect, useState } from "react";
// user Data fetch
const UserDataFetch = () => {
  const [carts, setCarts] = useState([]);
  console.log(carts);
  useEffect(() => {
    fetch("https://dummyjson.com/carts?limit=3")
      .then((res) => res.json())
      .then((data) => setCarts(data.carts));
  }, []);
  return (
    <div>
      <p className="text-2xl text-red-400 font-bold my-5">User Data Fetch:</p>
      {carts.length > 0 ? (
        <>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {carts.map((cart) => (
              <div
                key={cart.id}
                className="relative rounded-xl p-[2px] bg-gradient-to-r from-pink-500  via-blue-500 to-teal-400 animate-border bg-[length:300%_300%]"
              >
                <div className="bg-white rounded-xl p-5 h-full">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Cart ID: {cart.id}
                  </h2>
                  <p className="text-gray-600">
                    Total Products: {cart.totalProducts}
                  </p>
                  <p className="text-gray-600">
                    Total Quantity: {cart.totalQuantity}
                  </p>
                  <p className="text-gray-800 font-semibold mt-2">
                    Total: ${cart.total}
                  </p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500 font-medium mb-1">
                      Products:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      {cart.products.slice(0, 3).map((product) => (
                        <li key={product.id}>
                          {product.title} ({product.quantity} pcs)
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-40">
            <div className="w-6 h-6 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
            <span className="ml-3 text-blue-600 font-semibold text-lg">
              Loading...
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDataFetch;
