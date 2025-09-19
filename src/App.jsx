import React ,{useEffect,useState} from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import './App.css'
import Interactivefacts from './Thetwopages/Interactivefacts'
import Catsfacts from './Thetwopages/Catsfacts'

function App() {
 
  return(
    
<Router>
  <Routes>

<Route path='/' element={<Interactivefacts/>}/>
<Route path='/Catsfacts' element={<Catsfacts/>}/>
<Route path='*' element={<div>404 error</div>}/>
  </Routes>
</Router>
  )
}

export default App
