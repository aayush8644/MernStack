
import {Schema,model} from "mongoose"
let productSchema = Schema({
   name: {
    type:String,
    required:[true,"name is required"]
   },
    price:{
          type:String,
    required:[true,"price is required"]},
    quantity:{
          type:String,
    required:[true,"quantity is required"]},
    description:{
          type:String,
    required:[true,"description is required"]},


});
let product= model("product",productSchema);
export default product;