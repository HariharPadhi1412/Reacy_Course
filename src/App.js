import React, { useState } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";

const App = () => {
  const [message, useMessage] = useState("This is start");

  const changeMessage = () => {
    console.log("fn clicked");
    useMessage("message updated");
  };
  console.log(message);
  return (
    <>
      <div>{message}</div>
      <button onClick={changeMessage}>click</button>
    </>
  );
};

export default App;
