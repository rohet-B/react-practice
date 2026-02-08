import { useState } from "react";
import Without_useCallbackChild from "./Without_useCallbackChild"

const Without_useCallback = () => {
    const [count,setCount] = useState(0)

    // Whenever count will increase, Without_Usecallback component will re-render the component
    // and this function will also being recreated on every re-renders.
    const increment = () =>{
      setCount(count+1);
    }
    console.log("Parent rendered.")
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment Parent</button><br/>
      <Without_useCallbackChild onIncrement={increment}/>
    </div>
  )
}

export default Without_useCallback


// In this example without useCallback, every time the parent component re-renders (which happens whenever count changes), React creates a new increment function again.
// Since this increment function is passed to the child as a prop, React thinks the child’s props have changed. Because of that, even though the child is wrapped with React.memo, it still re-renders every time the parent renders. That’s why in the console you see “Parent rendered.” followed by “Child rendered” on the initial load and again on every button click, whether you click the parent button or the child button.
// The child re-render here is unnecessary, but it happens because the function prop keeps changing on every parent render.

// Our Main Goal:
// We want the parent component to re-render when its state changes, but we do not want the child to re-render unless its props actually change. Without useCallback, every time the parent re-renders, a new function is created and passed to the child as a prop. Even though the logic is the same, React sees it as a different function, so React.memo thinks the prop changed and the child re-renders. When we use useCallback, React remembers the same function reference between renders, so the child receives the same prop and does not re-render unnecessarily. In short, React.memo stops unnecessary child renders, and useCallback helps by keeping the function prop the same.