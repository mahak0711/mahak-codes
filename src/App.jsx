import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Landing } from './components/Landing'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
  <Landing/>
  </BrowserRouter>
    </>
  )
}

export default App
