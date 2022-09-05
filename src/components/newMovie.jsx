import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import Dropdown from "./common/dropdown";
import { getGenres } from "../services/fakeGenreService";

class RegisterForm extends Form {
  state = {
    data: { title: "", genere: "", numberInStock: 0, dailyRentalRate: 0.0 },
    errors: {},
  };

  schema = {};

  callBackend = () => {
    console.log("Register Form Submitted");
  };

  render() {
    const genres = getGenres();
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          <div className="mb-3">
            <label for="genre" class="form-label">
              Genre
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="genre"
            >
              {genres.map((genre) => {
                return <option value={genre._id}>{genre.name}</option>;
              })}
            </select>
          </div>

          {this.renderInput("numberInStock", "Number in Stock", "text")}
          {this.renderInput("dailyRentalRate", "Rate", "text")}
          {this.renderButton("Submit", "btn btn-primary")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
