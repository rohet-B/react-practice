import React, { useState, useId } from "react";

function App() {
  const [name, setName] = useState("");
  const inputId = useId(); // generate unique id

  return (
    <div className="p-5">
      <label htmlFor={inputId} className="block mb-2">Name:</label>
      <input
        id={inputId} // link input to label
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 rounded"
      />
      <p className="mt-2">You typed: {name}</p>
    </div>
  );
}

export default App;
