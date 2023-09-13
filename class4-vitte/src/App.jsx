import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Test } from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello from Vitte</h1>
     <Test />
    </>
  )
}

export default App

// npm install -g yarn (this is done only once)
// yarn create vite
// choose project name
// choose React 
// choose Javascript

// For startup 
// cd project_name
// yarn 
// yarn dev
