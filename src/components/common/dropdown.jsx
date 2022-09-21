import React from "react";

const Dropdown = ({ choices, label, name, value, onChange, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {choices.map((genre) => {
          return (
            <option key={genre._id} value={genre._id}>
              {genre.name}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dropdown;
