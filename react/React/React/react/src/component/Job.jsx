import React from 'react'
import { useParams } from 'react-router-dom'

const Job = () => {
    let params=useParams();
    console.log(params);

  return (
    <div>
      This is job page
    </div>
  )
}

export default Job
