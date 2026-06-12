import { Router } from "express";
import User from "../schema/userSchema.js";
import { trusted } from "mongoose";

let userRoutes =Router();

userRoutes
.route("/")     //localhost:8000/user
.post(async(req,res,next)=>{


    //it solve error in post
try {
    let  result = await User.create(req.body);
    res.json({
    success:true,
    message:"user created successfully",
    result:result,

});
} catch (error) {
    res.json({
        success:false,
        message:error.message,
    });
    
}






/*send data from postman
get data sent by postman
store data in user table*/


/*let  result = await User.create(req.body);
console.log(req.body);
res.json({
    success:true,
    message:"user created successfully",
    result:result,

});
*/


// res.json("user is cretated sucessfully");


})
.get(async(req,res,next)=>{

    try {
    let result = await User.find();
    res.json({
        success:true,
        message:"result read successfully.",
        result:result,
    }); 
} catch (error) {
    res.json({
        success:false,
        message:error.message,

    });
}
})


userRoutes

.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result= await User.findById(req.params.id);
        res.json({
            success:true,
            message:"user read successfully",
            result:result,
        });
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
            
        });
        
    }

    /* console.log(req.params.id) */
})
.patch(async (req, res, next) => {
    try {
        let result = await User.findByIdAndUpdate(req.params.id,req.body);

        res.json({
            success: true,
            message: "user updated successfully",
            result: result,
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
})







.delete(async(req,res,next)=>{
    try {
        let result= await User.findByIdAndDelete(req.params.id);
        res.json({
            success:true,
            message:"user deletes succesfully",
            result:result,
        });
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        });
        
    }
});


export default userRoutes;