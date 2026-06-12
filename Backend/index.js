import express, { json } from "express";
import firstRoute from "./src/routes/firstRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import mongoose from "mongoose";
import schoolRoutes from "./src/routes/schoolRoutes.js";





let app =express();
app.listen(8000,()=>{
    console.log("application is listening at port 80000");
    mongoose.connect("mongodb://localhost:27017/cosmmos");


});

app.use(json());  //makes our backend to take data from postman
//app.use(firstRoute);
app.use("/product",productRoutes)
app.use("/user",userRoutes)
app.use("/school",schoolRoutes)



/*school
  name 
  address
  phone
  email
  no.rooms
  */
/*schema
routes 
index*/











//databases operation(crud//
//create:post
//read:get
//update:patch
//delete:delete

/*
localhost:8000,post=>"a"
localhost:8000,post=>"b"
localhost:8000,post=>"c"
localhost:8000,post=>"d"

*/
/* app.post("/",(req,res,next)=>{
    console.log("a")
});

app.get("/",(req,res,next)=>{
    console.log("b")
});


app.patch("/",(req,res,next)=>{
    console.log("c")
});

app.delete("/",(req,res,next)=>{
    console.log("d")
});

 */