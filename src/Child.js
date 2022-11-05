import React from "react";

function Child({ increment, value }) {
  return (
    <div>
      <p>Child : {value}</p>
      <button onClick={increment}>
        Increment</button>
    </div>
  );
}

export default Child;
