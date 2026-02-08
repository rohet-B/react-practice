import {useState} from 'react'

const Without_useMemo = () => {

    const [count,setCount] = useState(0)
    
    // On each render this expensive calculation will execute & see console.window
    const expensiveCalculation = () =>{
        console.log("Expensive Calculation Running....")
        let total = 0;
        for(let i=0;i<100000000;i++){
            total += i;
        }
        return total;
    }

    const result = expensiveCalculation();

  return (
    <div>
      <h2>Result of expensive calculation: {result}</h2>
      <h3>Count:{count}</h3>
      <button className='bg-slate-600 p-2 cursor-pointer' onClick={()=>{setCount(count+1)}}>Increase count</button>
    </div>
  )
}

export default Without_useMemo
