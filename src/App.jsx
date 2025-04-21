import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import StateChange from './components/StateChange'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <StateBasics/> */}
    {/* <StateChange/> */}
    <Routes>
      <Route path='/' element= {<StateBasics/>}/>
      <Route path='/c' element= {<Counter/>}/>
      <Route path='/d' element= {<StateChange/>}/>
      <Route path='/p' element= {<Products/>}/>

    </Routes>

    </>
  )
}

export default App
