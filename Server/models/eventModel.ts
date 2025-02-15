import mongoose from "mongoose";

interface IEvent extends Document{
    title:string;
    description:string;
    organizer:string;
    image:string;
    date:Date;
    eventLocation:string;
    isPaid:boolean;
    price?:number|null;
    attendees:mongoose.Types.ObjectId[];
    createdAt:Date;
}


const eventsSchema = new mongoose.Schema<IEvent>({
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


const eventModel = mongoose.model<IEvent>('Events',eventsSchema)
export default eventModel