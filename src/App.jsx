import { useState } from 'react'
import './App.css'
import Data from '../components/Data/Data'
import {Route,Routes} from "react-router-dom"
import CountryDetail from '../components/CountryDetail/CountryDetail'

function App() {
  return (
    <> 
        <Routes>
           <Route path="/" element={<Data/>}/>
           <Route path="country/:name" element={<CountryDetail/>}/>
        </Routes>
    </>
  )
}

export default App
