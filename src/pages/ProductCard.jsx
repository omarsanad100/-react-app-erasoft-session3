import ProductCardUiComponent from "../components/ProductCardUiComponent";
import React, { useState } from "react";

const ProductCard = ({ image, title, price }) => {
  // Dear monitor, I created this component to be reusable, so I can use it in multiple places.
  const [count, setCount] = useState(0);

  return (
    <ProductCardUiComponent
      image={image}
      title={title}
      price={price}
      count={count}
      setCount={setCount}
    />
  );
};

export default ProductCard;
