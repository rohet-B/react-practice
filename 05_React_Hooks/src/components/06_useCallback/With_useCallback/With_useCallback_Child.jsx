import React from "react";

// React.memo means child will render only if props change
const With_useCallback_Child = React.memo(({ onIncrement }) => {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment from Child</button>;
});

export default With_useCallback_Child;