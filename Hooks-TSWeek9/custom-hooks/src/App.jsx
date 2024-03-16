import React , { useState , useEffect } from 'react'
import './App.css'
import axios from 'axios'

const useDebounce = (inputValue,delay)=>{
  const [debouncedValue,setDebounced] = useState(inputValue)
  useEffect(()=>{
    const handler= setTimeout(()=>setDebounced(inputValue), delay);
    return()=>{
      clearTimeout(handler)
    }
  },[inputValue,delay])
  return debouncedValue
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

const useInterval = (callback,delay) =>{
  useEffect(()=>{
    const value=setInterval(callback,delay)
    return ()=>{
      clearInterval(value)
    }
  },[callback,delay])
}

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

function useIsOnline(){
  const [online, setOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, [])

  return online
}


function useTodos(n){
 // const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher) - fetcher is the json
  const [todos, setTodos] = useState([])
  const [loading,setLoading]=useState(true)

  function getData() {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
  }

  useEffect(() => {
    const value=setInterval(()=>{
      getData()
  }, n*1000)
  getData()//for the first one
  return ()=>{
    clearInterval(value)
  }
    },[n])
    
  return {todos,loading}
}

function App() {
  const {todos,loading}=useTodos(5)
  const [count,setCount]=useState(0)

  useInterval(()=>{
    setCount(c=>c+1)
  },1000)

  return (
    <>
      {/* eslint-disable-next-line react/jsx-key */}
      {loading ? <div>loading...</div> : todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
// function App() {

//   const [render,setRender]=useState(true)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setRender(r => !r)
//     },3000)
//   })
//   return (
//     <>
//      {render ? <MyComponent/> : <div></div>}
//     </>
//   )
// }

// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("mounted")

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("unmounted")
//     };
//   }, []);

//   // Render UI
//   return <div>
//     hehe from inside
//   </div>
// }
// class MyComponent extends React.Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//   }

//   render() {
//     // Render UI
//   }
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

