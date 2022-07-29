import React, { Component } from "react";
class Product extends Component {
  state = {
    name: "Grean Burger",
    count: 5,
    price: 2,
  };
  zeroCase() {
    return this.state.count === 0
      ? "badge bg-danger m-3 fs-5"
      : "badge bg-primary m-3 fs-5";
  }
  price() {
    return this.state.count * this.state.price;
  }
  //   constructor() {
  //     super();
  //     this.Eventhandeler = this.Eventhandeler.bind(this);
  //   }
  icrhandeler = (num) => {
    this.setState({ count: this.state.count + num });
  };
  // increament = () => {
  //   this.icrhandeler(2);
  // };
  // .bind(this,5)
  render() {
    /* const styles = {
      color: "#808080",
    };*/
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h1 className="mt-5 mb-3">Shoping Cart</h1>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <ul className="p-0 m-0">
              {/* {(this.state.name === "" && <h2>No data</h2>)}*/}
              <li className="d-flex">
                <h3 className={this.zeroCase()}>{this.state.count}</h3>
                <h3 style={{ color: "#202002" }} className="m-3">
                  {this.state.name}
                </h3>
                <h3 className="m-3">{this.price()} LE</h3>
              </li>
              <li className="d-flex">
                <h3 className={this.zeroCase()}>{this.state.count}</h3>
                <h3 style={{ color: "#202002" }} className="m-3">
                  {this.state.name}
                </h3>
                <h3 className="m-3">{this.price()} LE</h3>
              </li>
              <li className="d-flex">
                <h3 className={this.zeroCase()}>{this.state.count}</h3>
                <h3 style={{ color: "#202002" }} className="m-3">
                  {this.state.name}
                </h3>
                <h3 className="m-3">{this.price()} LE</h3>
              </li>
              {/*{this.state.names.map((name) => (
                <li className="d-flex">
                  <h3 style={{ color: "#202002" }} className="m-3">
                    {name}
                  </h3>
                </li>
              ))}*/}
            </ul>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button
              onClick={() => {
                this.icrhandeler(2);
              }}
              className="btn btn-primary fs-4"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
