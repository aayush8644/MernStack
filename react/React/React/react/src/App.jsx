

import Address from "./Address";
import Father from "./Father";
import Info from "./Info";
import Mother from "./Mother";



// Exercise: Create frontend with the given data
const App=()=>{
  let name="Jamuna"
  let surname="BC"
  let products=[
      {name:"laptop",price:70000,_id:1,quantity:10},
      {name:"tab",price:60000,_id:2,quantity:11},
      {name:"mobile",price:50000,_id:3,quantity:12},
]
let users=[
  {name:"janaka",surname:"marasini",_id:1,age:21,gender:"female",image:"flower.png"},
  {name:"aaku",surname:"ojha",_id:2,age:23,gender:"female",image:"flower.png"},
  {name:"namuna",surname:"bk",_id:4,age:22,gender:"female",image:"flower.png"},
  

]
   return<div>
    <h1 style={{backgroundColor:"green"}}
    >Details</h1>

    
    <p style={{color:"yellow"}}>name is {name}</p>
    <p style={{border:"solid red 2px"}}>surname is {surname}</p>
    <p> The sum of 1+1 is{1+1}</p>
    <img src="flower.png "width="200px" height="200px"></img>
{
   products.map((item,i)=>{
    return (<div style={{border:"solid red 1px"}}>

      <p>products name is{item.name}</p>
      <p>price is{item.price}</p>
      <p>quantity is{item.quantity}</p>
      </div>)
   })};
          
{
  users.map((item,i) => {
    return (<div style={{border:"solid red 1px"}}>
      <img src={item.image}></img>
      <p>name is {item.name}</p>
    </div>)
  })
}
  <Address country="nepal" province={5} city ="Butwal"></Address>
  <Father name="Dinanath" surname="Marasini" age={48}></Father>
  <Mother name="kamala" surname="Marasini" age={46}></Mother>
  <Info name="Janaka" surname="Marasini" ward ={2} ></Info>

  <p className="success">This is success message</p>
  <p className="error">This is error message</p>
  <p className="warning">This is warning message</p>
  


    
 </div>
 };
export default App;

