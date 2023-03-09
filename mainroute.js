import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import CommentForm from './commentForm'
import Contect from './contect'
import Home from './Home'

export default function Mainroute() {
    
  return (
   <BrowserRouter>
   <Link to='/Home'>HOME</Link>
   <Link to='/About'>ABOUT</Link>
   <Link to='/Contect'>CONTECT</Link>
    <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='contect' element={<Contect/>}/>
        <Route path='commentForm/:id' element={<CommentForm/>}/>
    </Routes>
   </BrowserRouter>
  )
}
