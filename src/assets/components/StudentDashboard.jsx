import React from 'react'

const StudentDashboard = (props) => {
  return (
    <div>
      <p>{props.student.name}</p>
      <p>{props.student.age}</p>
      <p>{props.student.college}</p>
      <p>{props.student.branch}</p>
      <button onClick={() => props.handleGreeting(props.student.name)}>Click </button>
    </div>
  )
}

export default StudentDashboard
