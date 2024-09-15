import React from 'react'
import Navbar from './Component/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './assets/Pages/Home'
import Blog from './assets/Pages/Blog'
import About from './assets/Pages/About'

const App = () => {
 const route = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element ={<Layout/>}/>
    <Route index element ={<Home/>}/>
    <Route path='/blog' element ={<Blog/>}/>
    <Route path='/about' element ={<About/>}/>

    <Route/>
  </Route>
 ))
  return (
    <>
    <RouterProvider router={route}/>
      <Navbar/>
    </>
  )
}

export default App
