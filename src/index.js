import React from "react";
import { createRoot } from "react-dom/client";

const morning = true;
const morningText = "This is morning";
const eveningText = "This is evening";

function handleClick() {
  console.log("hello");
}
function handleClick1() {
  console.log("hello1");
}

const morningEle = (
  <div>
    {morningText} <span onClick={handleClick}>Its 8 am</span>
  </div>
);
const eveningEle = (
  <div>
    {eveningText} <span onClick={handleClick1}>Its 6 pm</span>
  </div>
);

const greetingEle = morning ? morningEle : eveningEle;

const GreetingElement = () => <>{greetingEle} i am inside it</>;

const root = createRoot(document.getElementById("root"));
root.render(<GreetingElement />);
