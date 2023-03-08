import React from "react";
import LoginForm from "../components/molecules/LoginForm";

const Login = () => {
  return (
    <div className="login-screen">
      <div className="login-screen__content h-screen flex flex-col justify-center items-center">
        <h1 className="login-screen__title text-3xl"> MyWatchList </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
