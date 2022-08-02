import React from "react";
import qs from "query-string";
const Details = (props) => {
  let res = qs.parse(props.location.search);
  console.log(res);
  const product = props.products.filter(
    (c) => c.id === parseInt(props.match.params.id)
  )[0];
  return (
    <React.Fragment>
      <h1>Product No.{product.id} Details</h1>
      <h2>{product.name}</h2>
      <h2>Count in shopping cart is {product.count}</h2>
    </React.Fragment>
  );
};

export default Details;