import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Hedaers = () => {
  return (
    <nav>
      <div
        className="ui fixed menu"
        style={{ color: "blue", backgroundColor: "white" }}
      >
        <div className="ui container center">
          <h2>REDO-REDUX</h2>
        </div>

        <Link className="link" to="/">
          ListAll
        </Link>

        <Link className="link" to="/products/:productid">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Hedaers;
