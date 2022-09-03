import React from "react";

const Input = ({ value, name, label, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default Input;
