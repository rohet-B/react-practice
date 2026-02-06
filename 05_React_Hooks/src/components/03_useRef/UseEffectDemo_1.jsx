// Suppose you are building a React component that counts how many times it has rendered. The component should use a state variable count and a button to increment it, which triggers a re-render. 
// Inside the component, declare a normal variable a initialized to 0 and a ref variable a2 using useRef(0). 
// Use a useEffect that runs on every render to increment both a and a2.current by 1. 
// Display the number of renders using the count state. 
// After running the component, observe the difference between a and a2.current on each render.
// Explain why the normal variable a resets on every render, while a2.current persists.


import React from 'react'
import {useState, useRef, useEffect} from "react"

const UseEffectDemo_1 = () => {
    const [count,setCount] = useState(1);

    let increase = () =>{
        setCount(count+1);
    }

    let a = 0 // without useRef
    let a2 = useRef(0) // With useRef

    useEffect(()=>{
        a+=1; 
        a2.current = a2.current+1; // a2.current is the current value stored in the ref object (a2) that stays the same even when the component re-renders.
        // Normal variables reset on each render because the function (entire component like here useEffectDemo_1) runs from scratch, but useRef keeps its ".current" value across renders, letting you store persistent mutable data without causing re-renders.
    })

    
  return (
    <div>
        <h2>Current Rendering Number: {count} </h2>
        <h2>Previous Rendering Number: {a2.current} </h2>
        <h2>Previous Rendering Number using variable a: {a}</h2>
        <button className='mt-1.5 bg-slate-600 text-amber-50 p-1 rounded-2xl cursor-pointer' onClick={increase}>Re-Render</button>
    </div>
  )
}

export default UseEffectDemo_1