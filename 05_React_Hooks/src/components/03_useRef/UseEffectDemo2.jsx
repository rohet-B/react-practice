// Suppose you are building a React component with an input box and a button. 
// You want the button to change the background color of the input box and automatically focus on it when clicked.
// Use useRef to get a reference to the input element. 
// Write a function that runs when the button is clicked, which sets the input’s backgroundColor to red and calls .focus() on it.

import React from 'react'
import { useState,useRef } from 'react'

const UseEffectDemo2 = () => {
    const [count,setCount] = useState(0);

    const inputRef = useRef(); 
    
    function handleClick() {
        inputRef.current.style.backgroundColor = "red";
        inputRef.current.focus();
    }

  return (
    <div>
        {/* Attached a ref to the input element so we can access and manipulate it directly */}
      <input ref={inputRef} className='bg-amber-800 rounded-4xl'/>
      <button className=' ml-5 mt-1.5 bg-slate-600 text-amber-50 p-1 rounded-2xl cursor-pointer' onClick={handleClick}>Keep Your eye on left input box & press me</button>
    </div>
  )
}

export default UseEffectDemo2
