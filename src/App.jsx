import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Fruits from './Pages/Fruits'
import CreateFruits from './Pages/CreateFruits'
import CreateVeggies from './Pages/CreateVeggies'
import Veggies from './Pages/Veggies'

function App() {


  return (
    <>
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/create">
        Create
      </Link>
      <Link to="/create/veggies">
        Create Veggies
      </Link>
      <Link to="/veggies">
        Veggies
      </Link>
    </nav>
    
    <Routes>
      <Route path='/' element={<Fruits />} />
      <Route path='/create' element={<CreateFruits />}/>
      <Route path='/veggies' element={<Veggies />}/>
      <Route path='/create/veggies' element={<CreateVeggies />}/>
    </Routes>
    </>
  )
}

export default App
