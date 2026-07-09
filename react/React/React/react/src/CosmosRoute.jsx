import React from 'react'
import CosmosLink from './CosmosLink'
import { Route, Routes } from 'react-router-dom'
import Product from './component/Product'
import Job from './component/Job'
import Login from './component/Login'
import About from './component/About'

const CosmosRoute = () => {
  return (
    <div>
       <Routes>
        <Route path ="/product" element={<Product></Product>}></Route>
         <Route path ="/job/:id1/name/:id2" element={<Job></Job>}></Route>
          <Route path ="/login" element={<Login></Login>}></Route>
           <Route path ="/about" element={<About></About>}></Route>
       </Routes>
    </div>
  )
}

export default CosmosRoute
