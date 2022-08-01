import React, { Component } from "react";
class Pro extends Component {
  getPrice() {
    return this.props.product.count * this.props.product.price;
  }
  render() {
    return (
      <div className="col-12 d-flex justify-content-between mt-3 mb-3">
        <div className="container">
          <div className="row">
            <span className="badge bg-info fs-5 col-1">
              {this.props.product.id}
            </span>
            <span className="col-3 d-flex justify-content-center align-items-center">
              {this.props.product.name}
            </span>
            <span className="col-2 d-flex justify-content-center align-items-center">
              {this.props.product.count}
            </span>
            <span className="col-3 d-flex justify-content-center align-items-center">
              {this.getPrice()}
            </span>
            <div className="col-1 p-1 d-flex justify-content-end">
              <button
                style={{ color: "white" }}
                className="btn bg-info fs-5"
                onClick={() => {
                  this.props.onDecrement(this.props.product);
                }}
              >
                -
              </button>
            </div>
            <div className="col-1 p-1 d-flex justify-content-end">
              <button
                style={{ color: "white" }}
                className="btn bg-info fs-5"
                onClick={() => {
                  this.props.onIncrement(this.props.product);
                }}
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
