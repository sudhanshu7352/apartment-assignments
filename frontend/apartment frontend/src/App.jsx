import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StickyHeadTable from './components/home'
import { Login } from './components/login'
import PrimarySearchAppBar from './components/navbar'
import { Flat } from './components/flat'
import { HomePage } from './components/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Routes>
       {/* //  <Route path="/" element={<StickyHeadTable />}  /> */}
       <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flat/:id" element={<Flat />} />
      </Routes>
    </div>
  )
}

export default App
