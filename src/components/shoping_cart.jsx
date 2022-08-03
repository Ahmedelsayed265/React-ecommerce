import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pro from "./pro";
class Cart extends Component {
  isEmpty() {
    if (this.props.products.length === 0) {
      return (
        <h2 className="w-100 text-center">
          Your Cart Is Empty \ <Link to="/menu">Menu</Link>
        </h2>
      );
    } else {
      return this.props.products.map((product) => (
        <Pro
          key={product.id}
          product={product}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onDelete={this.props.onDelete}
        ></Pro>
      ));
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.isEmpty()}
          <div className="col-12 mt-3">
            <button style={{ color: "white" }} className="w-100 btn bg-info">
              PROCEED TO PAY
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
