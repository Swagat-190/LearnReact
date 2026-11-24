import React from 'react'

const StudentCard = (props) => {
  return (
    <div>
      <p>Name = {props.name}</p>
      <p>Age = {props.age}</p>
      <p>message = {props.onClick()}</p>
    </div>
  )
}

export default StudentCard
