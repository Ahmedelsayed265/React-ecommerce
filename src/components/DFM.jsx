import React from "react";
const Dpro = (props) => {
  return (
    <span
      onClick={() => props.onDelete(props.product)}
      style={{ cursor: "pointer", color: "black" }}
    >
      <i className="fas fa-trash"></i>
    </span>
  );
};

export default Dpro;
