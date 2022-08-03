import React from "react";
const Add = (props) => {
  const style = !props.product.inCart
    ? { color: "gray", cursor: "pointer" }
    : { color: "#000", cursor: "pointer" };
  return (
    <i
      style={style}
      onClick={() => props.onCartChange(props.product)}
      className="fas fa-cart-plus"
    ></i>
  );
};

export default Add;
