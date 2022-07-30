import React, { Component } from "react";
import NavBar from "./components/nav";
import Cart from "./components/shoping_cart";

class App extends Component {
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
        <NavBar products={this.state.products} />
        <Cart
          products={this.state.products}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onDelete={this.deleteHandel}
        />
      </React.Fragment>
    );
  }
}

export default App;
