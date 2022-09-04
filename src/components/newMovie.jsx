import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = { data: { title: "", genere: "", total: 0, cost: 0.0 }, errors: {} };

  schema = {};

  callBackend = () => {
    console.log("Register Form Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderInput("genere", "Genre", "text")}
          {this.renderInput("total", "Number in Stock", "text")}
          {this.renderInput("cost", "Rate", "text")}
          {this.renderButton("Submit", "btn btn-primary")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
