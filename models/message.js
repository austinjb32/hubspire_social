const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const messageSchema=new Schema({
    messageType:{
        type:String,
        enum:['Text','Image','File'],
        required:true,
        default:'Text'
    },
    content:{
        type:String,
        default:null,
    },
    status:{
        type:String,
        enum:['Sent', 'Received'],
        default:'Sent'
    },
    creator:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Users"
    },
    receiver:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Users"
    },
    attachment:{
        type:String,
        default:null
    }

},
{timestamps:true})

module.exports=mongoose.model("Messages",messageSchema);