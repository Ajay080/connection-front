import React from 'react'
import './App.css'
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'
function App() {
  const courseGoals=[
    {id:"cg1",text:"Finish the course"},
    {id:"cg2",text:"Learn all about the course Main Topic"},
    {id:"cg3",text:"Help Other Students in the course Q&A"}
  ]
  
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal />
      <GoalList goals={courseGoals}/>{/* goals will be the prop that holds the reference to this array */}
    </div>
  );
}

export default App;
