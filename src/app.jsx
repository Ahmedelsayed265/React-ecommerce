import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/nav";
import Home from "./components/home";
import Menu from "./components/menu";
import About from "./components/about";
import Contact from "./components/contact";
import Cart from "./components/shoping_cart";
import Details from "./components/proDetails";
import notfound from "./components/notFound";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "burger", price: 50, count: 0, inCart: false },
      { id: 2, name: "Steak", price: 100, count: 0, inCart: false },
      { id: 3, name: "salad", price: 20, count: 0, inCart: false },
      { id: 4, name: "rice", price: 70, count: 0, inCart: false },
      { id: 5, name: "Mango", price: 100, count: 0, inCart: false },
    ],
  };
  inCartChange = (i) => {
    //clone
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    //edit
    products[index].inCart = !products[index].inCart;
    products[index].count = 1;
    //set
    this.setState({ products });
  };
  inCartDelete = (i) => {
    //clone
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    //edit
    products[index].inCart = !products[index].inCart;
    products[index].count = 0;
    //set
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
          productsCount={
            this.state.products.filter((p) => p.inCart && p.count > 0).length
          }
        />
        <div className="container mt-5">
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  products={this.state.products}
                  onCartChange={this.inCartChange}
                  {...props}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/cart"
              render={(props) => (
                <Cart
                  products={this.state.products.filter((p) => p.inCart)}
                  onIncrement={this.increment}
                  onDecrement={this.decrement}
                  onDelete={this.inCartDelete}
                  {...props}
                />
              )}
            />
            <Route
              path="/products/:id/:name?"
              render={(props) => (
                <Details products={this.state.products} {...props} />
              )}
            />
            <Route path="/notFound" component={notfound} />
            <Redirect to="/notFound" />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
