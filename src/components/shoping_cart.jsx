import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pro from "./pro";
class Cart extends Component {
  isEmpty() {
    if (this.props.products.length === 0) {
      return (
        <h3 className="w-100 text-center">
          Your Cart Is Empty \ <Link to="/menu">Menu</Link>
        </h3>
      );
    } else {
      return (
        <React.Fragment>
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-3">Name</div>
                <div className="col-3 d-flex justify-content-center">Count</div>
                <div className="col-3 d-flex justify-content-center">Price</div>
              </div>
            </div>
          </div>
          {this.props.products.map((product) => (
            <Pro
              key={product.id}
              product={product}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            ></Pro>
          ))}
        </React.Fragment>
      );
    }
  }
  getSum() {
    return this.props.products
      .reduce((acc, product) => acc + product.count * product.price, 0)
      .toFixed(2);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.isEmpty()}
          <div className="col-12 mt-3">
            <button style={{ color: "white" }} className="w-100 btn bg-info">
              PROCEED TO PAY {this.getSum()} $
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
