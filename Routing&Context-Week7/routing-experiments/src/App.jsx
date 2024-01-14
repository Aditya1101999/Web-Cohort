// import { Suspense , lazy, useContext, useState } from 'react'
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import { CountContext } from './context';
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
// const DashBoard=lazy(()=>import("./Components/Dashboard"))
// const Landing=lazy(()=>import("./Components/Landing"))

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, countSelector } from "./store/atoms/count"

function App(){
  return (
        <div>
         <RecoilRoot>
          <Count />
        </RecoilRoot>
        </div>
  )
}
function Count() {
  return <div>
    <CountRenderer  />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count=useRecoilValue(countAtom)
  return <div>
    {count}
    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer(){
  //const count=useRecoilValue(countAtom)
  // const isEven = useMemo(()=>{
  //   return count%2==0
  // },[count]
  const isEven=useRecoilValue(countSelector)
  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Buttons() {
 // const [count,setCount]=useRecoilState(countAtom)
 const setCount=useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count=>count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count=>count - 1)
    }}>Decrease</button>
  </div>
}

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