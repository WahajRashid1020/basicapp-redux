import axios from "axios";
import React, { useEffect } from "react";
import { setproducts } from "../redux/action/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductComponents from "./ProductComponents";
const ProductList = () => {
  const product = useSelector((state) => state);
  console.log("Updates", product);
  const dispatch = useDispatch();
  const fetchApi = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setproducts(response.data.products));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div style={{ marginTop: "6%" }} className="ui grid container">
      <ProductComponents />
    </div>
  );
};

export default ProductList;
