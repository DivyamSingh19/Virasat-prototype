import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    date:{type:Number, required:true}
    

})

const postModel = mongoose.models.post || mongoose.model("post",postSchema)
export default postModel