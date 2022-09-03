import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") errors.username = "Username is blank";

    if (account.password.trim() === "") errors.password = "Password is blank";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call backend
    console.log("submitted");
  };

  handleChange = (e) => {
    const { account } = this.state;
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account, errors } = { ...this.state };

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            type="textfield"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
