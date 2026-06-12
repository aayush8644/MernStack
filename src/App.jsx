import Address from "./assets/Address";
import Father from "./assets/Father";
import Info from "./assets/Info";
import Mother from "./assets/Mother";

const App=()=>{

  let name ="aayush"
  let surname="chaurasiya"

let products=[
  {name:"laptop",price:5000,_id:1,quantity:10},
  {name:"tv",price:5000,_id:2,quantity:20},
  {name:"car",price:5000,_id:3,quantity:30},
];

let users = [
    {name:"nitan", surname:"thapa", _id:1, age: 20, gender:"male",email:"nitanthapa425@gmail.com", image:"handsome.jpg"},
    {name:"sita", surname:"thapa", _id:2, age: 30, gender:"female",email:"sitathapa425@gmail.com", image:"handsome.jpg"},
    {name:"rita", surname:"thapa", _id:2, age: 30, gender:"female",email:"ritathapa425@gmail.com", image:"handsome.jpg"},
    {name:"anusha", surname:"thapa", _id:2, age: 30, gender:"female",email:"anushathapa425@gmail.com", image:"handsome.jpg"},
  ]

  return(
  <div>
    <h1 style={{backgroundColor:"green"}}>Details</h1>
   <p style={{color:"yellow"}}> name is {name}</p>
   <p style={{border:"solid red 2px"}}>surname is {surname}</p>
   <p>the sum of 1+1 is {1+1}</p>
   <img src="handsome.jpg" width="200" height="200px"></img>


   {
    products.map((item)=>{
      return (
        <div style ={{border:"solid blue 2px"}}>
          <p> product name is {item.name}</p>
          <p> price is {item.price}</p>
          <p>quantity is {item.quantity}</p>
        </div>
      )
    })
   }

   {
    users.map((item)=>{
      return(      <div  style={{border:"1px solid"}}>
        <img src={item.image} width="200" height="200px"></img>
        <p>name is {item.name}</p>
      </div>)
    })
   }

   <Address country="nepal" city="kathmandu" province={3}></Address>
   <Father name="xyz" surname="c=abd" age={41}></Father>
   <Mother name ="ahdj" surname="shdj" age={41}></Mother>
   <Info name='Aayush' surname='chaurasiya' ward={10}></Info>


   {/*make css in different file
import css in main file */}

   <p className="success" >this is success</p>
   <p className="error" >this is error</p>
   <p className="warning" >this is warning</p>






      </div>

);
};

export default App;


