import { Router } from "express";



const schoolRoutes=Router()

schoolRoutes
.route("/")
.post(async(req,res,next)=>{
 
    console.log("post")
})

.get(async(req,res,next)=>{})


schoolRoutes

.route("/:id")
.get(async(req,res,next)=>{})
.patch(async(req,res,next)=>{})
.delete(async(req,res,next)=>{})


export default schoolRoutes;
