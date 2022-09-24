import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedproducts,
  removeproducts,
} from "../redux/action/productActions";
import axios from "axios";
const ProductDetails = () => {
  const { productid } = useParams();
  const product = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const { thumbnail, title, price, category, description } = product;
  const fetchDetails = async () => {
    const response = await axios
      .get(`https://dummyjson.com/products/${productid}`)
      .catch((err) => err, "Error");

    dispatch(selectedproducts(response.data));
  };
  useEffect(() => {
    if (productid && productid !== "") fetchDetails();
    return () => {
      dispatch(removeproducts());
    };
  }, [productid]);

  return (
    <div style={{ marginTop: "6%" }}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={thumbnail} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
