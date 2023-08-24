const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const postSchema=new Schema({
    title:{
        type:String,
        default:null,
        required:true
    },
    content:{
        type:String,
        default:null,
        required:true
    },
    shareCount:{
        type:Number,
        default:0,
    },
    creator:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Users"
    },
    imageUrl:{
        type:String,
        default:null
    }

},
{timestamps:true})

module.exports=mongoose.model("Posts",postSchema);