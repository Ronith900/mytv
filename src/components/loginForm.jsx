import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const error = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    console.log(error);
    const errors = {};
    const { data } = this.state;
    if (data.username.trim() === "") errors.username = "Username is blank";

    if (data.password.trim() === "") errors.password = "Password is blank";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  joiValidate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (!result.error) return null;
    const errors = {};
    result.error.details.forEach((item) => {
      errors[item.path[0]] = item.message;
    });

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.joiValidate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call backend
    console.log("submitted");
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  handleChange = (e) => {
    //handling erros
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    //updating input value to the state
    const { data } = this.state;
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };
  render() {
    const { data, errors } = { ...this.state };

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            type="text"
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={data.password}
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
          <button
            disabled={this.joiValidate()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
