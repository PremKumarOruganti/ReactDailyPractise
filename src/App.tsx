/* eslint-disable @typescript-eslint/no-unused-vars */
//import React from 'react'
//import GettingContextValue from './Components/GettingContextValue'
//import EventHandling from './Components/EventHandling'
//import Todo from './Components/Todo'
//import UseEffect_Filtering_Data from './Components/UseEffect_Filtering_Data'
//import UseStateCountEX from './Components/UseStateCountEX'

// import ReducerBasic from "./UseReducer/ReducerBasic"
import ReducerBasic from './UseReducer/ReducerBasic'

const App = () => {

  return (
    <>
      {/* Fetching Data from the API */}
      {/* <UseEffect_Filtering_Data /> */}
      {/* Event Handling Example */}
      {/* <EventHandling /> */}
      {/* Crud Operations With Array */}
      {/* <Todo /> */}
      {/* useState Count Increment and decrement Example */}
      {/* <UseStateCountEX/> */}
      {/* useReducerBasics */}
      <ReducerBasic />

      <h3>Hello...</h3>

      {/* <h1>Hello {new Date().toString()}</h1> */}


    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
