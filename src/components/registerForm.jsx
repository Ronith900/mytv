import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = { data: { useremail: "", password: "", username: "" }, errors: {} };

  schema = {
    useremail: Joi.string()
      .required()
      .label("Username")
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: Joi.string().required().min(5).label("Password"),
    username: Joi.string().required().label("Profile Name"),
  };

  callBackend = () => {
    console.log("Register Form Submitted");
  };

  render() {
    return (
      <div>
        <h2>Register Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("useremail", "User Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("username", "User Name", "text")}
          {this.renderButton("Submit", "btn btn-primary")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
