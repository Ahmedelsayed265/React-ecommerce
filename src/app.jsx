import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Cart from "./components/shoping_cart";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "burger", price: 50, count: 5 },
      { id: 2, name: "Steak", price: 100, count: 10 },
      { id: 3, name: "salad", price: 20, count: 2 },
      { id: 4, name: "rice", price: 70, count: 4 },
      { id: 5, name: "Mango", price: 100, count: 6 },
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
        <NavBar
          productsCount={this.state.products.filter((p) => p.count > 0).length}
        />
        <div className="container mt-5">
          <Route path="./components/about" component={About} />
          <Route path="./components/home" component={Home} />
          <Route path="./components/contact" component={Contact} />
          <Cart
            products={this.state.products}
            onIncrement={this.increment}
            onDecrement={this.decrement}
            onDelete={this.deleteHandel}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
