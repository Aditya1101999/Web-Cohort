// import { Suspense , lazy, useContext, useState } from 'react'
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import { CountContext } from './context';
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
// const DashBoard=lazy(()=>import("./Components/Dashboard"))
// const Landing=lazy(()=>import("./Components/Landing"))

import { RecoilRoot, useRecoilValueLoadable  } from "recoil"
import { todosAtomFamily } from "./store/atoms/count"

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

// eslint-disable-next-line react/prop-types
function Todo({id}) {
  //returns contents and states
   const todo = useRecoilValueLoadable(todosAtomFamily(id));

   if(todo.state==="loading"){
    return <div>
      Loading...
    </div>
    }else if (todo.state === "hasValue"){
      return (
        <>
          {todo.contents.title}
          {todo.contents.description}
          <br />
        </>
      )
   }
   else if(todo.state === "hasError"){
    return <div>
      Error
    </div>
   }

  
}
// function Helper() {
//   const networkCount = useRecoilValue(notifications)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   // useEffect(() => {
//   //   // fetch
//   //   axios.get("https://sum-server.100xdevs.com/notifications")
//   //     .then(res => {
//   //       setNetworkCount(res.data)
//   //     })
//   // },[] )

//   return (
//     <>
//       <button>Home</button>
      
//       <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
//       <button>Jobs {networkCount.jobs}</button>
//       <button>Messaging ({networkCount.messaging})</button>
//       <button>Notifications ({networkCount.notifications})</button>

//       <button>Me ({totalNotificationCount})</button>
//     </>
//   )
// }

// function Helper(){
//   const networkNotificationCount=useRecoilValue(networkAtom)
//   const jobCount=useRecoilValue(jobsAtom)
//   const messageCount=useRecoilValue(messagingAtom)
//   const notificationcount=useRecoilValue(notificationAtom)
//   const totalNotificationcount=useRecoilValue(totalNotificationSelector)
//   return <>
//       <button>Home</button>
//       <button>Network ({networkNotificationCount>=100 ? "99+" : networkNotificationCount})</button>
//       <button>Jobs ({ jobCount>=100 ? "99+" :  jobCount})</button>
//       <button>Messaging ({messageCount>=100 ? "99+" : messageCount})</button>
//       <button>Notifications ({notificationcount>=100 ? "99+" :notificationcount})</button>
//      <button>Me ({totalNotificationcount})</button>
//   </>
// }

// function App(){
//   return (
//         <div>
//          <RecoilRoot>
//           <Count />
//         </RecoilRoot>
//         </div>
//   )
// }
// function Count() {
//   return <div>
//     <CountRenderer  />
//     <Buttons />
//   </div>
// }

// function CountRenderer() {
//   const count=useRecoilValue(countAtom)
//   return <div>
//     {count}
//     <EvenCountRenderer/>
//   </div>
// }

// function EvenCountRenderer(){
//   //const count=useRecoilValue(countAtom)
//   // const isEven = useMemo(()=>{
//   //   return count%2==0
//   // },[count]
//   const isEven=useRecoilValue(countSelector)
//   return <div>
//     {isEven ? "It is even" : null}
//   </div>
// }

// function Buttons() {
//  // const [count,setCount]=useRecoilState(countAtom)
//  const setCount=useSetRecoilState(countAtom)
//   return <div>
//     <button onClick={() => {
//       setCount(count=>count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count=>count - 1)
//     }}>Decrease</button>
//   </div>
// }

// function App() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <div>
//       <CountContext.Provider value={{ count, setCount }}>
//       <Count />
//       </CountContext.Provider>
//     </div>
//   )
// }

// function Count() {
//   return <div>
//     <CountRenderer  />
//     <Buttons />
//   </div>
// }

// function CountRenderer() {
//   const {count}=useContext(CountContext)
//   return <div>
//     {count}
//   </div>
// }

// function Buttons() {
//   const {count,setCount}=useContext(CountContext)
//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Decrease</button>
//   </div>
// }

// function App() {
  
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//             <Route path="/dashboard" element={<Suspense fallback={"..loading"}><DashBoard /></Suspense>} />
//             <Route path="/" element={<Suspense fallback={"loading.."}><Landing /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return <div>
//       <div>
//         <button onClick={() => {
//           navigate("/");
//         }}>Landing page</button>

//         <button onClick={() => {
//           navigate("/dashboard");
//         }}>Dashboard</button>

//       </div>
//   </div>
// }

export default App