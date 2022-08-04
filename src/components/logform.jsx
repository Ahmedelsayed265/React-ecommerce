import React, { Component } from "react";
import Joi from "joi-browser";
class Form extends Component {
  state = {
    username: "",
    emailaddress: "",
    password: "",
    checked: "",
    errors: {},
  };
  Schema = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    emailaddress: Joi.string().email(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{8-20}/)
      .required(),
  };
  validate = () => {
    const errors = {};
    //Clone State
    const state = { ...this.state };
    delete state.errors;
    delete state.checked;
    const res = Joi.validate(state, this.Schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    //Set State
    this.setState({ errors });
    return errors;
  };
  submit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) return;
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
        <div className="mb-3 form-group">
          <label htmlFor="usermail" className="form-label">
            Email address
          </label>
          <input
            name="emailaddress"
            onChange={this.change}
            type="email"
            value={this.state.emailaddress}
            className="form-control"
            id="usermail"
          />
          {this.state.errors.emailaddress && (
            <div className="alert alert-danger">
              {this.state.errors.emailaddress}
            </div>
          )}
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="username" className="form-label">
            User name
          </label>
          <input
            name="username"
            onChange={this.change}
            type="text"
            value={this.state.username}
            className="form-control"
            id="username"
          />
          {this.state.errors.username && (
            <div className="alert alert-danger">
              {this.state.errors.username}
            </div>
          )}
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
          {this.state.errors.password && (
            <div className="alert alert-danger">
              {this.state.errors.password}
            </div>
          )}
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
