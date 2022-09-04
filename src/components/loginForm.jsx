import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // validate = () => {
  //   const error = Joi.validate(this.state.data, this.schema, {
  //     abortEarly: false,
  //   });
  //   console.log(error);
  //   const errors = {};
  //   const { data } = this.state;
  //   if (data.username.trim() === "") errors.username = "Username is blank";

  //   if (data.password.trim() === "") errors.password = "Password is blank";

  //   return Object.keys(errors).length === 0 ? null : errors;
  // };

  callBackend = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password")}

          {this.renderButton("Submit", "btn btn-primary")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
