import React, { Component } from "react";
import qs from "query-string";
class Details extends Component {
  state = {};
  render() {
    let res = qs.parse(this.props.location.search);
    console.log(res);
    const product = this.props.products.filter(
      (c) => c.id === parseInt(this.props.match.params.id)
    )[0];
    return (
      <React.Fragment>
        <h1>Product No.{product.id} Details</h1>
        <h2>{product.name}</h2>
        <h2>Count in shopping cart is {product.count}</h2>
        <button className="btn bg-info btn-sm fs-4" style={{ color: "white" }}>
          Save
        </button>
      </React.Fragment>
    );
  }
}
export default Details;
