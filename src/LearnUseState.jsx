import { useState } from 'react'

const LearnUseState = () => {

    let [name,setName]=useState("aayush")
    let [count,setCount]=useState(1)


  return (
    <div>
        <p>name is {name}</p>
        <button onClick={()=>{
            console.log("button is clicked")
        }}>send</button>


        <button onClick={()=>{
            setName("ram")
        }}>changeName</button>

        <p>count is {count}</p>
         <button onClick={()=>{
            setCount(count+1);
        }}>+</button>

        <button onClick={()=>{
            setCount(count-1);
        }}>-</button>



    </div>
  )
}

export default LearnUseState


//make variable using usestate()