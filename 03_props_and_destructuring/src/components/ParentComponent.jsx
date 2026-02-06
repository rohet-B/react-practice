// Passing Props

import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const name = "Rohit Biswash"
    const age = 21
  return (
    <div>
      {/* To test destructuring with values */}
      <ChildComponent name = {name} age = {age} />

      {/* To test Destructuring with defalut values */}
      {/* <ChildComponent/>  */}
    </div>
  )
}

export default ParentComponent
