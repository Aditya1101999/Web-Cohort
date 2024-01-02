import React, { useState } from 'react';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



function App() {
  //const [count,setCount]=useState(0)
  const [todos,setTodos]=useState([{
    title: "Go to Gym",
    description : " From 7-9",
    completed:false
  },
  {
    title: "Go to DSA",
    description : " From 9-10",
    completed:false
  }])

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }
  

  return (
    <div>
     {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
    <button onClick={addTodo}>Add a Random Todo</button>
    {todos.map(function(todo){return <Todo title={todo.title} description={todo.description}/>})}
    </div>
  )
}
// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count+1)
//   }
//   return <button onClick={onClickHandler}>Counter {props.count}</button>
// }
function Todo(props){
  return <div>
    <h2>{props.title}</h2>
    <h3>{props.description}</h3>
  </div>
}
export default App
