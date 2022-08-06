import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pro extends Component {
  getPrice() {
    return (this.props.product.count * this.props.product.price).toFixed(2);
  }
  render() {
    return (
      <div className="col-12 d-flex justify-content-between mt-3 mb-3">
        <div className="container">
          <div className="row">
            <span className="col-3 d-flex justify-content-start align-items-center">
              <Link to={`/products/${this.props.product.id}`}>
                {this.props.product.name}
              </Link>
            </span>
            <span className="col-3 d-flex justify-content-center align-items-center">
              {this.props.product.count}
            </span>
            <span className="col-3 d-flex justify-content-center align-items-center">
              {this.getPrice()}$
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
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pro;
