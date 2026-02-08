import React,{useState,useMemo} from 'react'

const With_useMemo = () => {
    const [count1,setCount] = useState(0)
    const [count2,setCount2] = useState(10)

     const expensiveCalculation = () =>{
        console.log("Expensive Calculation Running....")
        let total = 0;
        for(let i=0;i<100000000;i++){
            total += i;
        }
        return total;
    }

    // Using useMemo 
    const result = useMemo(expensiveCalculation,[count1]);
    // run the expensiveCalculation fn only when any updation or re-render is done in count1, Rest don't run it unnecessary.
  return (
    <div>
       <h2>Result of expensive calculation: {result}</h2>
      <h3>Count:{count1}</h3>
      <button className='bg-slate-600 p-2 cursor-pointer' onClick={()=>{setCount(count1+1)}}>Increase count</button>
      <h3>Count:{count2}</h3>
      <button className='bg-slate-600 p-2 cursor-pointer' onClick={()=>{setCount2(count2+10)}}>Increase count</button>
    </div>
  )
}

export default With_useMemo
