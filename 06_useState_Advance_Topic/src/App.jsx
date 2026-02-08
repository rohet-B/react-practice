import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let add = () =>{
    // Guess the output

    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    // At first glance, you might think this increases count by 3.
    // But React batches multiple state updates in one render.
    // Here,each count still has the old value in all three calls, so only increases by 1.
    
    // What it means when we say react batches multiple updates?
    // When we update state in react, React does NOT change UI updates immediately.
    // Instead, it collects multiple updates together (this is called batching).
    // After batching, React applies all updates at once to keep things fast and efficient.
    

    // Example: If we increase a counter several times in a row,
    // React groups them and then updates the counter in one go.
    // And the value of counter would be 1.


    // To solve above problem we will use functional state or functional update
    // In React, functional state (or functional update) is a way to update state using a function instead of a direct value.
    // setCount(count + 1) => Normally, when you update state, you pass a value i.e count
    // setCount(prev => prev + 1) => With a functional update, you provide a function (prev => prev + 1) to setCount  that takes the previous state as an argument and returns the updated state.
    // Keep in mind you can give any name to prev.
    setCount(prev => prev +1)
    setCount(prev => prev +1)
    setCount(prev => prev +1)


    // Increasing number by 4 or 5 numbers is not suggested but suppose 
    // If you ever need to increase the counter multiple times in one go we will use functional update or functional state.
  }

  let remove = () =>{
    setCount(count-1);
  }

  return (
    <>
      <h1>Practice Makes Experience</h1>
      <h3>Counter Value: {count}</h3>
      <button onClick={add}>Add Value</button>
      <br /><br />
      <button onClick={remove}>Remove Value</button>
    </>
  )
}

export default App