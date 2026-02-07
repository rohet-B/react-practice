import React from 'react'
import GreatGrandChild from "./GreatGrandChild.jsx"

const GrandChile = (props) => {
  return (
    <div>
      <GreatGrandChild count = {props.count}/>
    </div>
  )
}

export default GrandChile
