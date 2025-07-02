import React from 'react'

function New(props) {
  return (
    <div>
      <h1>my name is {props.data.name}</h1>
      <h2>i am old {props.data.age}</h2>
    </div>
  )
}

export default New
