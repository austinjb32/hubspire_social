const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const notificationSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    content:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model("Notifications",notificationSchema);