// Receiving props
import React from 'react'

// Without Destructuring props / Simple Props
// const ChildComponent = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

// OR

// With Destructuring Props
//   const ChildComponent = ({name,age}) => {
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   )
// }

// With Destructuring & defalut values
  const ChildComponent = ({name="Unknown",age=0}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default ChildComponent