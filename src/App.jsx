import React from 'react'
import ProfileCard from './assets/components/profileCard';
import StudentCard from './assets/components/StudentCard';
import StudentDashboard from './assets/components/StudentDashboard';
const App = () => {
  const student = {
  name: "Swagat",
  age: 22,
  college: "Trident Academy",
  branch: "CSE",
  skills: ["Java", "React", "Spring Boot"]
};
function handleGreeting(name){
  alert("Hello"+name);

}
function handleButtonClick(event){
  <p>event</p>
  
}
const isPlaced = true;

return (
<StudentDashboard student={student} handleGreeting = {handleGreeting} handleButtonClick={handleButtonClick}/>

);
  }


export default App
