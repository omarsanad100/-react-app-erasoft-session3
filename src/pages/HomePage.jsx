import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../components/constant";
import HomePageUiComponent from "../components/HomePageUiComponent";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const data = await axios.get(api);
      setProducts(data.data);
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  };

  getProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return <HomePageUiComponent products={products} />;
};

export default HomePage;
