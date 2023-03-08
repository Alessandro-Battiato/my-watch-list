import React from "react";
import LoginForm from "../components/molecules/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (user) => {
    localStorage.setItem("user", user);
    navigate("/");
  };

  return (
    <div className="login-screen bg-gray-900 dark">
      <div className="login-screen__content h-screen flex flex-col justify-center items-center">
        <h1 className="login-screen__title text-3xl text-accent">
          MyWatchList
        </h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
