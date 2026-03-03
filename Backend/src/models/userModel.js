import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3,
        maxlength : 25,
        index : true
    },
    phone : {
        type : String,
        unique : true,
        trim : true,
    },
    email: {
        type : String,
        unique : true,
        required : true,
        lowercase : true,
        trim : true,
    },
    role :{
        type : String,
        default : "student",
        enum : ["teacher","admin","Student"]
    },
    fullname : {
        type : String,
        required : true,
        trim : true,
        index : true,
    },
    avatar : {
        type : String,//cloudnary URL
        required : true,
    },
    coverImage : {
        type : String,
    },
    watchHistory: [
        {
            type : Schema.Types.ObjectId,
            ref : "Video"
        }
    ],
    password : {
        type : String,
        required : [true,'password is required']
    },
    refreshToken : {
        type : String,
    }
},
{
    timestamps : true
})
const User = mongoose.Model("User",userSchema)
export default User;