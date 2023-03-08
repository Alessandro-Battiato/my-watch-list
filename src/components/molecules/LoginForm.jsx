import React from "react";
import TextInput from "../atoms/TextInput";

const LoginForm = () => {
  return (
    <form className="login-form flex flex-col items-center mt-6">
      <div className="login-form__username">
        <TextInput
          id="input-username"
          name="username"
          placeholder="Username"
          required
        />
      </div>
      <div className="login-form__password mt-4">
        <TextInput
          id="input-password"
          name="password"
          placeholder="Password"
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
