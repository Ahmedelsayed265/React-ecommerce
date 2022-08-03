import React, { Component } from "react";
class Form extends Component {
  userName = React.createRef();
  Email = React.createRef();
  pass = React.createRef();
  remember = React.createRef();
  submit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <h2 className="text-center mb-5">Log In</h2>
        <div className="mb-3">
          <label htmlFor="usermail" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="usermail" />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User name
          </label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="userpass" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="userpass" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            ref={this.remember}
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
