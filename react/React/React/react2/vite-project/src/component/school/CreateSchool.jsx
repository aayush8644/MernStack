import React, { useState } from 'react'

const CreateSchool = () => {
  let [name,setName]=useState("")
  let [address,setAddress]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [phone,setPhone]=useState("")

   const handleSubmit = (e) => {

    e.preventDefault();
    let data={
      name:name,
      address:address,
      email:email,
      password:password,
      phone:phone
    
    }
    console.log(data)
  }


  return (
  <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <input id='Name' onChange={(e)=>setName(e.target.value)}></input>


         
        </div>

        <div>

            <label htmlFor="address">address</label>
            <input id='address' onChange={(e)=>setAddress(e.target.value)}></input>

        </div>
        <div>
          <label htmlFor="email"> email</label>
          <input id='email' onChange={(e)=>setEmail(e.target.value)}></input>

        </div>
        <div>
          <label htmlFor="password">password</label>
         <input id='password' onChange={(e)=>setPassword(e.target.value)}></input>

        </div>
         <div>
          <label htmlFor="phone">phone</label>
         <input id='phone' onChange={(e)=>setPhone(e.target.value)}></input>

        </div>


        
        <div>
          <button>create</button>
        </div>
      </form>
    </div>
  )
}


export default CreateSchool;
     