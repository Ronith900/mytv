import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

class RegisterForm extends Form {
  state = {
    data: { title: "", genere: "", numberInStock: 0, dailyRentalRate: 0.0 },
    errors: {},
  };

  schema = {
    title: Joi.string().required(),
    numberInStock: Joi.string().required(),
    dailyRentalRate: Joi.string().required(),
  };

  callBackend = () => {
    console.log("Register Form Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderDropdown(getGenres(), "Genres", "genre")}
          {this.renderInput("numberInStock", "Number in Stock", "text")}
          {this.renderInput("dailyRentalRate", "Rate", "text")}
          {this.renderButton("Submit", "btn btn-primary")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
