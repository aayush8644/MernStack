import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const CosmosLink = () => {
    let navigate=useNavigate()
  return (
    <div>
        <NavLink to="/about" className="navlink">About</NavLink>
        <NavLink to="/contact" className="navlink">Contact</NavLink>
        <NavLink to="/Product" className="navlink">Product</NavLink>
        <button onClick ={()=>{
            navigate("/login")
        }}>login</button>
      
    </div>
  )
}

export default CosmosLink
//based on url,attach page (components)