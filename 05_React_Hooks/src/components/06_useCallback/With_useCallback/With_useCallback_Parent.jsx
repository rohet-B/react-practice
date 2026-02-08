import { useState,useCallback } from "react";
import With_useCallback_Child from "./With_useCallback_Child";

const With_useCallback_Parent = () => {
    const [count,setCount] = useState(0)

    // Whenever count will increase, With_useCallback component will re-render the component
    // and this function will also being recreated on every re-renders.
    const increment = useCallback(()=>{
      setCount(prev => prev +1)
      // setCount(count + 1) -> This uses the current value of count from the render.
      // The problem is: that value can become outdated (stale) in some situations.
      // like: Multiple state updates at the same time,
      // Inside useCallback with empty dependency array -> uses count from first render only because next time it used same function since it memorizes it.
      
      // Using functional state update (prev=>prev+1), help to solve above problems, it is basically used when a new state depends on old state.
      
    },[])
    console.log("Parent rendered")
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment Parent</button><br/>
      <With_useCallback_Child onIncrement={increment}/>
    </div>
  )
}

export default With_useCallback_Parent
