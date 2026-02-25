import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3,
        maxlength : 25,
    },
    phone : {
        type : String,
        unique : true,
        trim : true,
    },
    email: {
        type : String,
        unique : true,
        required : true
    },
    role :{
        type : String,
        default : "student",
        enum : ["teacher","admin","Student"]
    }
})
const User = mongoose.Model("User",userSchema)
export default User;