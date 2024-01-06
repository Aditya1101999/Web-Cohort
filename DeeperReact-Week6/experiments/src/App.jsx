import React,{ useEffect, useState } from "react"

// Assignment #2
// Create a component that takes a todo id as input
// And renders it by fetching it from the server
// The parent component should have a button, clicking on which the next
// todo is fetched

function App(){

  const [id,setId]=useState(1)

  return <div>
    <button onClick={()=>{setId(id+1)}}>Click me</button>
    <Todo id={id}/>
  </div>



}
function Todo({id}){
  const [todo,setTodo]=useState([])
  useEffect(()=>{
    // Fetch data from API
    fetch("https://sum-server.100xdevs.com/todo?id="+id)
    .then(async (res)=>{
      let json = await res.json()
      setTodo(json.todo)
    })
  },[id])//whenver id gets changed
  return <div>
     <h1>{todo.title}</h1>
     <h5>{todo.description}</h5>
   </div>
}




//assignment 1=>Create an app that polls the sum server
//Gets the current set of TODOs
//Renders it on screen
// function App(){

//   const [todos,setTodos]=useState([])

//   useEffect(() => {
//     setInterval(()=>{
//       fetch("https://sum-server.100xdevs.com/todos")
//       .then(async (res) => {
//         const json = await res.json();
//         setTodos(json.todos);
//       },10000)
//     })
//   }, [])//dependency array (when useffect should be called)

//   return <>
//   {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
//   </>

// }

//wrapper
// function App(){
//   return <>
//   <CardWrapper>
//     <TextComponent/>
//   </CardWrapper>
//   <CardWrapper>
//     hi there 
//   </CardWrapper>
//   </>
// }

// function TextComponent(){
//   return <div>
//     hi there from Text
//   </div>
// }

// function CardWrapper({children}){
//   return <div style={{border : "2px solid black" , padding : "20"}}>
//     {children}
//   </div>
// }

//todo application
// let counter=4

// function App() {
//   // const [firstTitle, setFirstTitle] = useState("my name is aditya");

//   // function changeTitle() {
//   //   setFirstTitle("My name is " + Math.random())
//   // }
//   const [todos,setTodos]=useState([{
//     id:1,
//     title:"go to gym",
//     description:"7 to 8"
//   },
//   {
//     id:2,
//     title:"go to home",
//     description:"8 to 9"
// },
// {
//   id:3,
//   title:"go to sleep",
//   description:"9 to 10"
// }])

// function addTodo(){
//   setTodos([...todos,{
//     id:counter++,
//     title:"wake up",
//     description:"6 to 7"
//   }])
// }
//   return (
//     <div>
//       {/* <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle} /> */}
//       {/* <HeaderWithButton/>
//       <Header title="My name is raman" /> */}
//       <button onClick={addTodo}>Add Todo</button>
//       {todos.map(todo=>
//         <Todo key={todo.id} title={todo.title} description={todo.description}/>
//       )}
//     </div>
//   )
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }

//down rendering
// // function HeaderWithButton() {
// //   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

// //   function changeTitle() {
// //     setFirstTitle("My name is " + Math.random())
// //   }

// //   return <>
// //     <button onClick={changeTitle}>Click me to change the title</button>
// //     <Header title={firstTitle} />
// //   </>
// // }

//static components
// // const Header=React.memo(function Header({title}) {
// //   return <div>
// //     {title}
// //   </div>
// // })


export default App