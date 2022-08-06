import React, { Component } from "react";
class productform extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.location.pathname === "/productform/new" ? (
          <h1 className="text-center">Add Product</h1>
        ) : (
          <h1 className="text-center">Edit Product</h1>
        )}
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input type="text" className="form-control" id="price" />
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
