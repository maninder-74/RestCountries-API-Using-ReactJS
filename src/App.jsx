import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Data from '../components/Data/Data'
function App() {


  return (
    <>
         <Navbar/>
         <Search/>
         <Data/>
    </>
  )
}

export default App
