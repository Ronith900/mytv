import React from "react";

const Dropdown = ({ choices, label, name }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id={name}
      >
        {choices.map((genre) => {
          return (
            <option key={genre._id} value={genre}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
