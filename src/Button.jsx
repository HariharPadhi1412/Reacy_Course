import React from "react";

const Button = (props) => {
  const { children, clickAction } = props;

  const handleClick = () => {
    clickAction?.();
  };
  console.log(children + "grgdshtfh");
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
