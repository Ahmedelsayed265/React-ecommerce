import React, { Component } from "react";
import Add from "./addcart";
class Menu extends Component {
  render() {
    const { products, onCartChange } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price}$</td>
              <td>
                <Add onCartChange={onCartChange} product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Menu;
