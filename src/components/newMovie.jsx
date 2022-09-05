import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

class RegisterForm extends Form {
  state = {
    data: { title: "", genre: {}, numberInStock: "", dailyRentalRate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required(),
    numberInStock: Joi.number().required().max(100).label("Number in Stock"),
    dailyRentalRate: Joi.number().required().max(10).label("Rental"),
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
          {this.renderDropdown(getGenres(), "Genre", "genre")}
          {this.renderInput("numberInStock", "Number in Stock", "text")}
          {this.renderInput("dailyRentalRate", "Rate", "text")}
          {this.renderButton("Submit", "btn btn-primary")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
