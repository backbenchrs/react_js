import React from 'react'
import Create from './components/Create'
import { Route, Routes } from 'react-router-dom'
import Read from './components/Read'
import Edit from './components/Edit'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = {<Create/>}/>
          <Route path='/read' element = {<Read/>}/>
          <Route path='/edit' element = {<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App