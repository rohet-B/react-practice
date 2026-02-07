import React from 'react'
import { useState} from "react";
import With_Context_Child from "./With_Context_Child.jsx"


import {CounterContext} from "./../../../context/Context1.jsx"

const With_Context_Parent = () => {

    const [count,setCount] = useState(0)

    // const data_for_child_component = count 
    // It is not recommended to create createContext in App.js; 
    // instead, we should create the context in a separate file inside a context folder inside src folder, 
    // export it from there, and then import it into App.jsx where it can be used to wrap components with the Provider.
    
  return (
    <div>
        <CounterContext.Provider value={count}>
            {/* Now this count value can be used in With_Context_Child.jsx file and subfiles mentioned in it. */}
            <With_Context_Child/>
        </CounterContext.Provider>

        <h2>Current value of count is: {count} from context_Parent.jsx file.</h2>
        <button className='mt-1.5 bg-slate-600 text-amber-50 p-1 rounded-2xl cursor-pointer' onClick={()=>(setCount(count+1))}>Increase</button>
    </div>
  )
}

export default With_Context_Parent
