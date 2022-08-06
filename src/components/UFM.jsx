import React from "react";
import { Link } from "react-router-dom";

const Upro = (props) => {
  return (
    <Link
      to={`/Edit/${props.product.id}`}
      style={{ cursor: "pointer", color: "black" }}
    >
      <i className="fas fa-edit"></i>
    </Link>
  );
};

export default Upro;
