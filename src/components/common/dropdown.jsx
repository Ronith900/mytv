import React from "react";

const Dropdown = (choices, label, name) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} class="form-label">
        {label}
      </label>
      <select
        class="form-select"
        aria-label="Default select example"
        id={name}
      ></select>
    </div>
  );
};

export default Dropdown;
