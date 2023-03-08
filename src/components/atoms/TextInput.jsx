import React from "react";

function TextInput({ id, name, placeholder, required }) {
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className="input input-accent w-full max-w-xs"
    />
  );
}

export default TextInput;
