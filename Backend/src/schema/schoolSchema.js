import { Schema, model } from "mongoose";

let schoolSchema = Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },

    address: {
        type: String,
        required: [true, "address is required"]
    },

    email: {
        type: String,
        required: [true, "email is required"]
    },

    phone: {
        type: String,
        required: [true, "number is required"]
    },

    noOfRooms: {
        type: String,
        required: [true, "room no. is required"]
    }
});

let School = model("School", schoolSchema);

export default Schemachool;