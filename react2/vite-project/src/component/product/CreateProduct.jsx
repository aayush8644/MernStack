import React, { useState } from 'react'
import axios from 'axios'

const CreateProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [classVal, setClass] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, price, description }
    try {
      await axios({
        url: "http://localhost:8000/product",
        method: "post",
        data
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name</label>
          <input id='Name' type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">price</label>
          <input id='price' type='number' onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <input id='Description' type='text' onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="class">class</label>
          <input id='class' onChange={(e) => setClass(e.target.value)} />
        </div>
        <div>
          <button>create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct
