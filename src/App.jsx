import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Main from './components/main'
import Category from './components/category'
import Services from './components/services'
import Blog from './components/blog'
import Contact from './components/contact'
import Layout from './components/layout'
export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/main" element={<Main/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}
