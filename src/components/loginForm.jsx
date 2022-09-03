import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  handleChange = (e) => {
    const { account } = this.state;
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const account = { ...this.state };
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
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
