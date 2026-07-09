import React, { useState } from 'react'

const LearnUseState = () => {
    let[name,setName]=useState("janaka");
    let[count,SetCount]=useState(1)


 return (
    <div>
      <p>name is {name}</p>
      <button onClick={()=>{
        console.log("button is click");
      }}>send
      </button>
      <button onClick={()=>{
        setName("janu");
      }}>Change Name</button>
      <p>count is {count}</p>
      <button onClick={()=>{
        SetCount(count + 1);
      }}>+</button>
      <button
        onClick={()=>{
            SetCount(count - 1)
        }}>-</button>
    </div>
  )
}

export default LearnUseState;

//make variable using usestate()
