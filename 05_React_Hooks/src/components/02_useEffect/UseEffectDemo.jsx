// Suppose you want to build a React component that acts as a counter and demonstrates the different ways useEffect can run. 
// The component should use useState to manage a count variable and include three separate useEffect hooks. 
// One useEffect should run on every render, another should run only once when the component first loads, and the third should run only when the count variable changes. 
// The component should also include a button that increments the count value and displays the current count in the button text. 
// Each useEffect can show an alert message to demonstrate when it runs, helping you understand the behavior of useEffect in React components.


import React from 'react'
import { useEffect,useState } from 'react'

const UseEffectDemo = () => {
    const [count,setCount] = useState(0);

    // Case 1: Run on every render 
    // To demonstrate Case 1, go to main.jsx and temporarily comment out <StrictMode>, because with <StrictMode> enabled, the code runs twice in development for testing purposes.
    useEffect(()=>{
        alert("Hello, Whenever you refresh, I'll show up because my work is to run on every render.")
    })

    // Case 2: Run only on first render
    useEffect(()=>{
        alert("Hello 2, My work is to run only on first render i.e this render only.")
    },[])

    // Case 3: Run only when certain values change
    useEffect(()=>{
        alert("Hello 3, You updated the count variable.")
    },[count])

  return (
    <div className='w-full flex justify-center gap-7'>
        <button className='cursor-pointer p-2.5 bg-amber-500 rounded-full' onClick={()=>{setCount(count > 0 ? count-1:0)}}>-</button>
        <h3 className='font-bold text-2xl'>{count}</h3>
        <button className='cursor-pointer p-2.5 bg-amber-500 rounded-full' onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  )
}

export default UseEffectDemo