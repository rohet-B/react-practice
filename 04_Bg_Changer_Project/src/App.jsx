import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  let change = (value) =>{
    setColor(value)
  }

  return (
    <>
      <div className='h-screen w-full duration-200' style={{backgroundColor:color}}>
        <div className='bg-slate-600 flex justify-between p-2'>
          <button className='p-2 rounded-2xl bg-red-500 cursor-pointer' onClick={()=>{change("red")}}>RED</button>
          <button className='p-2 rounded-2xl bg-green-500 cursor-pointer' onClick={()=>{change("green")}}>GREEN</button>
          <button className='p-2 rounded-2xl bg-blue-500 cursor-pointer' onClick={()=>{change("blue")}}>BLUE</button>
          <button className='p-2 rounded-2xl bg-gray-500 cursor-pointer' onClick={()=>{change("gray")}}>GRAY</button>
          <button className='p-2 rounded-2xl bg-yellow-500 cursor-pointer' onClick={()=>{change("yellow")}}>YELLOW</button>
          <button className='p-2 rounded-2xl bg-pink-500 cursor-pointer' onClick={()=>{change("pink")}}>PINK</button>
          <button className='p-2 rounded-2xl bg-purple-500 cursor-pointer' onClick={()=>{change("purple")}}>PURPLE</button>
          <button className='p-2 rounded-2xl bg-white cursor-pointer' onClick={()=>{change("white")}}>WHITE</button>
          <button className='p-2 rounded-2xl text-amber-50 bg-black cursor-pointer' onClick={()=>{change("black")}}>BLACK</button>
        </div>
      </div>
    </>
  )
}

export default App
