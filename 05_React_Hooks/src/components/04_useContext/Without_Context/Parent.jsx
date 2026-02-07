import React, { useState } from 'react'
import Child from "./Child.jsx"

const Parent = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h2>Current value of count: {count} from Parent.jsx</h2>
        <button className='mt-1.5 bg-slate-600 text-amber-50 p-1 rounded-2xl cursor-pointer' onClick={()=>(setCount(count+1))}>Add</button>
        <Child count={count}/> 
        {/* Passing value of count through props */}
    </div>
  )
}

export default Parent
