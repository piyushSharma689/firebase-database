import React from 'react'

function Card(props) {
  return (
    <>
    <div  id='card'>
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <h2>Phone no.: {props.mob}</h2>
    </div>
    </>
  )
}

export default Card