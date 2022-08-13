import React, { Component } from "react";
import axios from "axios";
class productform extends Component {
  state = {
    id: "",
    name: "",
    price: "",
  };
  async componentDidMount() {
    let id = this.props.match.params.id;
    if (id !== "new") {
      const { data } = await axios.get(
        "https://market-food-api.herokuapp.com/products/" + id
      );
      const state = { ...this.state };
      state.id = data.id;
      state.name = data.name;
      state.price = data.price;
      this.setState(state);
    }
  }
  onSave = async (e) => {
    e.preventDefault();
    if (this.props.location.pathname === "/productform/new") {
      let newPro = { ...this.state, count: 0, inCart: false };
      await axios.post(
        "https://market-food-api.herokuapp.com/products",
        newPro
      );
    } else {
      let editedObj = { ...this.state, count: 0, inCart: false };
      delete editedObj.id;
      await axios.put(
        "https://market-food-api.herokuapp.com/products/" + this.state.id,
        editedObj
      );
    }
    this.props.history.replace("/dashboard");
  };
  change = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">
          {this.props.location.pathname === "/productform/new"
            ? "Add Product"
            : "Edit Product"}
        </h1>
        <form onSubmit={this.onSave}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={this.state.name}
              onChange={this.change}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              name="price"
              value={this.state.price}
              onChange={this.change}
              type="text"
              className="form-control"
              id="price"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default productform;
