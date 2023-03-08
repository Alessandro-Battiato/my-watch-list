import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== "test") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="app h-screen flex flex-col">
      <div className="app__header">Header</div>
      <div className="app__content">Menu</div>
    </div>
  );
};

export default App;
