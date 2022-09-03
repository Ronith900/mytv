import React from "react";

const Input = ({ value, name, label, onChange, type, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
      />
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
