import React from "react";

// React.memo means child will render only if props change
const Without_useCallbackChild = React.memo(({ onIncrement }) => {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment from Child</button>;
});

export default Without_useCallbackChild;