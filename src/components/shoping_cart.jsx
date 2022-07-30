import React, { Component } from "react";
import Pro from "./pro";
class Cart extends Component {
  state = {
    products: [
      { id: 1, name: "burger", price: 50, count: 5 },
      { id: 2, name: "Steak", price: 100, count: 10 },
      { id: 3, name: "salad", price: 20, count: 2 },
      { id: 4, name: "rice", price: 70, count: 4 },
    ],
  };
  deleteHandel = (i) => {
    // this.state.products.splice(i, 1);
    // this.setState({ products: this.state.products });
    let products = this.state.products.filter((p) => p.id !== i.id);
    this.setState({ products });
  };
  increment = (i) => {
    //clone
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    //edit
    products[index].count++;
    //set
    this.setState({ products });
  };
  decrement = (i) => {
    //clone
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    //edit
    if (products[index].count > 0) {
      products[index].count--;
    }
    //set
    this.setState({ products });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <h2>Shoping Cart</h2>
              <span>Sort By: price</span>
            </div>
            {this.state.products.map((product) => (
              <Pro
                key={product.id}
                product={product}
                onIncrement={this.increment}
                onDecrement={this.decrement}
                onDelete={this.deleteHandel}
              ></Pro>
            ))}
            <div className="col-12 d-flex justify-content-between">
              <input className="w-100" placeholder="Discount code"></input>
              <button style={{ color: "white" }} className="btn bg-info ">
                apply
              </button>
            </div>
            <div className="col-12 mt-3">
              <button style={{ color: "white" }} className="w-100 btn bg-info">
                PROCEED TO PAY
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
