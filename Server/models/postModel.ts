import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    
    

})

const postModel = mongoose.models.post || mongoose.model("post",postSchema)
export default postModel