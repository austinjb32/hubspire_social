const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const commentSchema=new Schema({
    content:{
        required:true,
        type:String,
        default:null
    },
    post:{
        type:Schema.Types.ObjectId,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Comments",commentSchema);