import React from "react";
import { FaStar, FaTrash } from "react-icons/fa";

const Cart = ({ cart }) => {

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-6xl mx-auto px-5">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart ({cart.length})
        </h1>

        {cart.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-12 flex justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-500">
              Your Cart is Empty 🛒
            </h2>
          </div>

        ) : (

          <div className="flex flex-col gap-6">

            {cart.map((item) => {

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg p-5 flex justify-between items-center hover:shadow-2xl transition"
                >

                  <div className="flex gap-6">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 object-contain bg-gray-100 rounded-xl p-3"
                    />

                    <div className="flex flex-col gap-3">

                      <span className="bg-rose-100 text-rose-500 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                        {item.category}
                      </span>

                      <h2 className="text-xl font-bold line-clamp-2">
                        {item.title}
                      </h2>

                      <p className="text-gray-500 text-sm line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2">

                        <FaStar className="text-yellow-500" />

                        <span className="font-semibold">
                          {item.rating.rate}
                        </span>

                        <span className="text-gray-500 text-sm">
                          ({item.rating.count} Reviews)
                        </span>

                      </div>

                    </div>

                  </div>

                  <div className="flex flex-col items-center gap-5">

                    <h2 className="text-3xl font-bold text-rose-500">
                      ${item.price}
                    </h2>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl flex items-center gap-2">

                      <FaTrash />

                      Remove

                    </button>

                  </div>

                </div>
              );

            })}

            <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Total Price
              </h2>

              <h2 className="text-3xl font-bold text-green-600">
                ${totalPrice.toFixed(2)}
              </h2>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;