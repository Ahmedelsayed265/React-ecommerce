import React from "react";
const Edit = (product) => {
  return (
    <React.Fragment>
      <h1 className="text-center">Edit Product</h1>
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
};

export default Edit;
