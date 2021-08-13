import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductList;
