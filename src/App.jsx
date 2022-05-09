import React, { useState } from 'react'
import { TopBar } from './components'
import { Home, Single, WriteEditPost, Settings, Login, Register } from './Pages'
import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'

function App() {
  const [user, setUser] = useState(false)
  return (
    <>
    <TopBar user={user}/>
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path='/write' element={user ? <WriteEditPost /> : <Login />} />
      <Route path='/login' element={user ? <Home /> : <Login />} />
      <Route path='/register' element={ user ? <Home /> : <Register />} />
      <Route path='/settings' element={user ? <Settings /> : <Login />} />
      <Route path="/post/:postId" element={<Single />} />

    </Routes>
    </>
  )
}

export default App