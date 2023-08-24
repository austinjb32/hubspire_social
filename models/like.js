const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const likeSchema=new Schema({
    type:{
        enum:['Post','Comment'],
        type:String,
        default:'Post'
    },
    count:{
        type:Number,
        default:0,
        required:true
    },
    typeID:{
        type:Schema.Types.ObjectId,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model("Likes",likeSchema);