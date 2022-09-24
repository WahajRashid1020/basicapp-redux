import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponents = () => {
  const product = useSelector((state) => state.allproducts.product);
  const render = product.map((pro) => {
    const { id, title, thumbnail, price, category } = pro;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/products/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{render}</>;
};

export default ProductComponents;
