import React from 'react'
import ProfileCard from './assets/components/profileCard';
import StudentCard from './assets/components/StudentCard';
const App = () => {
  const name = "Swagat";
  const age = 22;
  const skills = ["java","react"];
  function onClick(){
    return "Hello"+name;
  }
 return (
    <>
    <div>
    <StudentCard name={name} age={age} skills={skills} onClick = {onClick}/>
    </div>
    </>
 );
  }


export default App
