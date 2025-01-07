import React from 'react'
import Home from './components/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Project from './components/Project'
import Service from './components/Service'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/project' element={<Project/>} ></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
