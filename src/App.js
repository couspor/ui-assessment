import React from "react";
import Header from "./components/header/Header";
import Rectangle1 from "components/rectangle1/rectangle1";
import Ractangle2 from "components/rectangle2/rectangle2";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />;
      <Rectangle1 />
      <Ractangle2 />
    </div>
  );
};

export default App;
