const mongoose=require('mongoose');
const {isEmail}=require('validator');

const Schema=mongoose.Schema;

const userSchema= new Schema({
    email:{
        required:true,
        type:String,
        unique:true,
        index:true,
    },
    password:{
        required:true,
        type:String,
    },
    name:{
        required:true,
        type:String,
        max:30
    },
    bio:{
        type:String,
        default:"No Bio",
        min:10
    },
    imageUrl:{
        type:String,
        default:null
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    posts:[{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }]
},{timestamps:true})

module.exports=mongoose.model('Users',userSchema);