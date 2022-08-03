import React, { Component } from "react";
class Form extends Component {
  state = {
    userName: "",
    emailAddress: "",
    password: "",
    checked: undefined,
  };
  submit = (e) => {
    e.preventDefault();
  };
  change = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <h2 className="text-center mb-5">Log In</h2>
        <div className="mb-3">
          <label htmlFor="usermail" className="form-label">
            Email address
          </label>
          <input
            name="emailAddress"
            onChange={this.change}
            type="email"
            value={this.state.emailAddress}
            className="form-control"
            id="usermail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User name
          </label>
          <input
            name="userName"
            onChange={this.change}
            type="text"
            value={this.state.userName}
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userpass" className="form-label">
            Password
          </label>
          <input
            name="password"
            onChange={this.change}
            type="password"
            value={this.state.password}
            className="form-control"
            id="userpass"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            name="checked"
            onChange={this.change}
            type="checkbox"
            value={this.state.checked}
            className="form-check-input"
            id="remember"
          />
          <label className="form-check-label" htmlFor="remember">
            remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
