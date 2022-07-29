import React, { Component } from "react";
class Pro extends Component {
  state = {
    id: this.props.product.id,
    name: this.props.product.name,
    price: this.props.product.price,
    count: this.props.product.count,
  };
  getPrice() {
    return this.state.count * this.state.price;
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="col-12 d-flex justify-content-between mt-3 mb-3">
        <div className="container">
          <div className="row">
            <span className="badge bg-info fs-5 col-1">{this.state.id}</span>
            <span className="col-3 d-flex justify-content-center align-items-center">
              {this.state.name}
            </span>
            <span className="col-3 d-flex justify-content-center align-items-center">
              {this.state.count}
            </span>
            <span className="col-3 d-flex justify-content-center align-items-center">
              {this.getPrice()}
            </span>
            <div className="col-1 p-1 d-flex justify-content-end">
              <button
                style={{ color: "white" }}
                className="btn bg-info fs-5"
                onClick={this.increment}
              >
                +
              </button>
            </div>
            <div className="col-1 p-1 d-flex justify-content-end">
              <button
                style={{ color: "white" }}
                className="btn bg-info fs-5"
                onClick={() => {
                  this.props.onDelete(this.props.product);
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pro;
