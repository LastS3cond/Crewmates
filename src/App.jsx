import { useState, useEffect } from 'react'
import './App.css'
import Gallery from './routes/Gallery.jsx'
import Crewmate from './components/Crewmate.jsx'
import Creator from './components/Creator.jsx'
import { Route, Routes, Link } from "react-router-dom";
import Home from './components/Home'

function App() {

  return (
    <>
      <nav className="sideBar">
        <h1><Link to="/home">Home</Link></h1>
        <h1></h1>
        <Link to="/creator">Crewmate Creator</Link>
        <h1></h1>
        <Link to="/Gallery">Gallery</Link>
      </nav>

      <Routes>
        <Route index element={<Gallery />} />
        <Route path="home" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="creator" element={<Creator />} />
        <Route path="crewmate" element={<Crewmate />} />
        <Route path="*" element={<Gallery />} />
      </Routes>
    </>
  )
};

export default App
