import React from "react";

function TextInput({ id, name, placeholder, value, onChange, required }) {
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input input-accent w-full max-w-xs bg-gray-900 dark text-accent-focus"
    />
  );
}

export default TextInput;
