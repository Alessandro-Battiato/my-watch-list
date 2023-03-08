import React, { useState } from "react";
import TextInput from "../atoms/TextInput";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form
      className="login-form flex flex-col items-center mt-6"
      onSubmit={handleSubmit}
    >
      <div className="login-form__username">
        <TextInput
          id="input-username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div className="login-form__password mt-4">
        <TextInput
          id="input-password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="login-form__submit mt-4">
        <input
          type="submit"
          value="Login"
          className="btn btn-outline btn-accent"
        />
      </div>
    </form>
  );
};

export default LoginForm;
