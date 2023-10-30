import React from "react";
import Button from "./Button.jsx";

const App = () => {
  const handleClick = () => {
    console.log("I  am clicking from parent");
  };

  return (
    <Button data={{ a: { b: { d: "e" } } }} childAction={handleClick}>
      Click ME
    </Button>
  );
};

export default App;
