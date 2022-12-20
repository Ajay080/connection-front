import React, {useState} from 'react'
import './App.css'
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'
function App() {
  const [courseGoals,setCourseGoals]=useState([
    {id:"cg1",text:"Finish the course"},
    {id:"cg2",text:"Learn all about the course Main Topic"},
    {id:"cg3",text:"Help Other Students in the course Q&A"}
  ])
 //useState return 2 things
 //first is the initial stage
 //second is the function that allow to update that state and replace it with 
 //new value and tell react it should rerender


  const addNewGoalHandler= async (newGoal)=>{
    // setCourseGoals(courseGoals.concat(newGoal))
    await setCourseGoals((prevCourseGoals)=>{
      return prevCourseGoals.concat(newGoal);
    });

  }
  
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals}/>{/* goals will be the prop that holds the reference to this array */}
    </div>
  );
}

export default App;
