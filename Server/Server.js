import express from "express";
import cors from 'cors'
import connectDB from "./config/mongodb.js";
import "dotenv/config"
import userRouter from "./routes/userRoute";
import connectCloudinary from "./config/cloudinary.js";
import jobRouter from "./routes/jobRoute.js";
import forumRouter from "./routes/forumRoute.js";
import postRoute from "./routes/postRoute.js";
const app = express();
const port = process.env.PORT||4000
 
connectDB()
connectCloudinary()


//middlewares
app.use(cors())
app.use(express.json())


app.use('/api/user',userRouter)
app.use('/api/jobs',jobRouter)
app.use('/api/forum',forumRouter)
app.use('/api/post',postRoute)

app.get('/',(req,res)=>{
    res.send("API WORKING")
}) 
   
app.listen(port ,()=>console.log('Server started on PORT',port))
