import React from 'react'
import GrandChile from "./GrandChile.jsx"

const Child = (props) => {
  return (
    <div>
      <GrandChile count={props.count}/>
    </div>
  )
}

export default Child
