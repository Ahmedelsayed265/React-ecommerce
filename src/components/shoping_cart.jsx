import React, { Component } from "react";
import Pro from "./pro";
class Cart extends Component {
  render() {
    const { products, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          {products.map((product) => (
            <Pro
              key={product.id}
              product={product}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            ></Pro>
          ))}
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
