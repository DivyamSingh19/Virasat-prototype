import mongoose from "mongoose";

 

const eventsSchema = new mongoose.Schema ({
    title:{type:String,required:true},
    description:{type:String,required:true},
    eventLocation:{type:String,required:true},
    date:{type:Date,required:true},
    organizer:{type:String,required:true},
    image:{type:String,required:true},
    isPaid:{type:Boolean,required:true},
    price:{type:Number,default:null},
    createdAt:{type:Date,default:Date.now},
    attendees:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}]
    

},{timestamps:true})


const eventModel = mongoose.model('Events',eventsSchema)
export default eventModel