import React from "react";
import Dpro from "./DFM";
import Upro from "./UFM";
const Pannel = (props) => {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Upro product={product} />
              </td>
              <td>
                <Dpro onDelete={props.onDelete} product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <button
          onClick={() => props.history.push("/productform/new")}
          style={{ color: "white" }}
          className="w-100 bg-info text-center mb-5 p-2 border-0 text-decoration-none"
        >
          ADD TO MENU
        </button>
      </div>
    </React.Fragment>
  );
};

export default Pannel;
