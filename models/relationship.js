const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const relationshipSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    following:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        default:null
    },
    follower:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        default:null
    },
},{timestamps:true})

module.exports=mongoose.model("Relationships",relationshipSchema);