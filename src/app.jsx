import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/nav";
import Home from "./components/home";
import Menu from "./components/menu";
import About from "./components/about";
import Contact from "./components/contact";
import Cart from "./components/shoping_cart";
import Details from "./components/proDetails";
import notfound from "./components/notFound";
import Form from "./components/logform";
import Pannel from "./components/admin";
import productform from "./components/proForm";

class App extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    let { data } = await axios.get(
      "https://market-food-api.herokuapp.com/products"
    );
    this.setState({ products: data });
  }
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
  deleteProduct = async (i) => {
    await axios.delete(
      "https://market-food-api.herokuapp.com/products/" + i.id
    );
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products.splice(index, 1);
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
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Form} />
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
              path="/dashboard"
              render={(props) => (
                <Pannel
                  products={this.state.products}
                  {...props}
                  onDelete={this.deleteProduct}
                />
              )}
            />
            <Route
              path="/products/:id/:name?"
              render={(props) => (
                <Details products={this.state.products} {...props} />
              )}
            />
            <Route path="/productform/:id?" component={productform} />
            <Route path="/notFound" component={notfound} />
            <Redirect to="/notFound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
