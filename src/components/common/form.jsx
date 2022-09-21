import React, { Component } from "react";
import Input from "./input";
import Dropdown from "./dropdown";
import Joi from "joi-browser";

class Form extends Component {
  state = { data: "", errors: "" };

  joiValidate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    console.log(result);
    if (!result.error) return null;
    const errors = {};
    result.error.details.forEach((item) => {
      errors[item.path[0]] = item.message;
    });

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const input = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(input, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = (e) => {
    //handling erros
    console.log(e);
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    //updating input value to the state
    const { data } = this.state;
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.joiValidate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call backend

    this.callBackend();
  };

  renderInput = (name, label, type) => {
    const { data, errors } = { ...this.state };
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderButton = (label, buttonType) => {
    return (
      <button
        disabled={this.joiValidate()}
        type="submit"
        className={buttonType}
      >
        {label}
      </button>
    );
  };

  renderDropdown = (choices, label, name) => {
    const { data, errors } = { ...this.state };
    return (
      <Dropdown
        choices={choices}
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
