// Suppose you want to make a shopping cart in React where users can add items like Apple and Orange. 
// The cart should store items in an array and update the UI whenever a new item is added. 
// Tell how you will made it.

// The spread operator (...) is used in React mainly to copy and update data without changing the original state.
// It means you don't modify the existing data directly instead a new version is created.
// React then compares new changes with actual reference of data (actual data) and updates the UI by pointing to the new memory address or new changes.
// It is commonly used while updating state, passing props, and working with arrays or objects. For example, when updating an array state like a shopping cart, ... is used inside setState (or setCart) to copy all existing items and then add a new item, such as setCart([...cart, "Apple"]).

import { useState } from 'react'
import React from 'react'

const Array = () => {
    let [cart,setCart]=useState([]);

    let addApple = () =>{
        setCart([...cart,"Apple"]);
    }

    let addBanana = () =>{
        setCart([...cart,"Banana"]);
    }

    let addGuava = () =>{
        setCart([...cart,"Guava"]);
    }

  return (
    <div className='mt-3 ml-8'>
        <h2 className='font-medium'>🛒 Shopping Cart</h2>
        {
            cart.map((item)=>{
               return <li className='text-slate-900'>{item}</li>
            })
        }
        <div className='flex justify-between w-[350px] mt-3'>
            <button className='bg-slate-600 text-amber-50 p-2 rounded-2xl cursor-pointer' onClick={addApple}>Add Apple</button>
            <button className='bg-slate-600 text-amber-50 p-2 rounded-2xl cursor-pointer' onClick={addBanana}>Add Banana</button>
            <button className='bg-slate-600 text-amber-50 p-2 rounded-2xl cursor-pointer' onClick={addGuava}>Add Guava</button>
        </div>
    </div>
  )
}

export default Array
