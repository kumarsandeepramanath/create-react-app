// Import the React and ReactDOM library
import React from "react";
import ReactDOM from "react-dom";

// Create a react Component
const App = function () {
  //   return <div> Hi there !</div>;
  const buttonText = "Click Me";
  return (
    <div>
      <label for="name" className="label">
        Enter Name
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};
// Take the react component and show it on screen

ReactDOM.render(<App />, document.querySelector("#root"));
