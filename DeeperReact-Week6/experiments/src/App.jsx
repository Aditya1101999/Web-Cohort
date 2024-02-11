import React,{ useCallback, useEffect, useMemo, memo, useRef, useState } from "react"
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  const divRef=useRef()

  


//only re render this function if any dependency changes
  const  logSomething= useCallback(()=> {
    console.log("child clicked")
  },[])

  return <div>
    <Child onClick={logSomething} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({logSomething}) => {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})


// function App(){
//   const [counter,setCounter]=useState(0)
//   const [inputValue,setInputValue]=useState(1)
//   // const [finalValue,setFinalValue]=useState(0)

//   // useEffect(()=>{
//   //   let count=0
//   //   for(let i=1;i<=inputValue;i++){
//   //       count+=i
//   //   }
//   //   setFinalValue(count)
//   // },[inputValue])

//   //will only run when inputvalue changes
//   let count=useMemo(()=>{
//     let count=0
//       for(let i=1;i<=inputValue;i++){
//           count+=i
//       }
//       return count
//   },[inputValue])


//   return <div>
//     <input onChange={(e)=>setInputValue(e.target.value)} placeholder={"Find sum from 1 to n"}></input><br/>
//     Sum from 1 to {inputValue} is {count}<br/>
//     <button onClick={()=>{setCounter(counter+1)}}>Counter {counter}</button>

//   </div>
// }
// function App() {
//   const [id,setId]=useState(1)
//   return <div>
//     <button onClick={()=>{setId(1)}}>1</button>
//     <button onClick={()=>{setId(2)}}>2</button>
//     <button onClick={()=>{setId(3)}}>3</button>
//     <button onClick={()=>{setId(4)}}>4</button>
//     <Todo id={id} />
//   </div>
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(async function(res) {
//         const json = await res.json();
//         setTodo (json.todo);
//       })
//   }, [id])

//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }

// function App(){

//   const [todos,setTodos]=useState([])

//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then((res)=>
//     setTodos(res.data.todos))
//   },[])

//   return <>
//   {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
//   </>

// }




// Assignment #2
// Create a component that takes a todo id as input
// And renders it by fetching it from the server
// The parent component should have a button, clicking on which the next
// todo is fetched

// function App(){

//   const [id,setId]=useState(1)

//   return <div>
//     <button onClick={()=>{setId(id+1)}}>Click me</button>
//     <Todo id={id}/>
//   </div>



// }
// function Todo({id}){
//   const [todo,setTodo]=useState([])
//   useEffect(()=>{
//     // Fetch data from API
//     fetch("https://sum-server.100xdevs.com/todo?id="+id)
//     .then(async (res)=>{
//       let json = await res.json()
//       setTodo(json.todo)
//     })
//   },[id])//whenver id gets changed
//   return <div>
//      <h1>{todo.title}</h1>
//      <h5>{todo.description}</h5>
//    </div>
// }




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