const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true , "Enter the username"]
        },
        email : {
            type : String,
            required : [true , "Email is required for creating a user"],
            trim : true,
            lowercase : true,
            match : [/^[^\s@]+@[^\s@]+\.[^\s@]+$/ , "Invalid Email Address"],
            unique: [true, "Email is already exits"],
        },
        password : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true 
    }
);

module.exports = mongoose.model("User", userSchema)