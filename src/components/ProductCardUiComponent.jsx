import React from "react";
import { Heart, Eye, Plus, Minus } from "lucide-react";
import { addProductToCart, removeProductFromCart } from "./constant.js";

const ProductCardUiComponent = ({ image, title, price, count, setCount }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-[400px] flex flex-col gap-4 sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover rounded-xl"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <div className="bg-white p-2 rounded-full shadow">
            <Heart className="w-5 h-5 text-black" />
          </div>
          <div className="bg-white p-2 rounded-full shadow">
            <Eye className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-red-500 font-semibold">{price}$</p>
        <p className="text-sm font-medium mt-1">{title}</p>
      </div>

      {count > 0 ? (
        <div className="flex items-center justify-between bg-black text-white py-2 px-4 rounded-xl">
          <button className="cursor-pointer" onClick={removeProductFromCart}>
            <Minus size={16} />
          </button>
          <span>{count}</span>
          <button className="cursor-pointer" onClick={addProductToCart}>
            <Plus size={16} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setCount(1)}
          className="bg-black text-white py-2 rounded-xl cursor-pointer"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default ProductCardUiComponent;
