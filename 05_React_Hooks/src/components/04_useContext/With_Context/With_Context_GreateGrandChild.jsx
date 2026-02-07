import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../../../context/Context1'


const With_Context_GreateGrandChild = () => {
    const count = useContext(CounterContext)
  return (
    <div>
        <h3>Hello, I am from Context_GreateGrandChild & Count value is {count}.</h3>
    </div>
  )
}

export default With_Context_GreateGrandChild
