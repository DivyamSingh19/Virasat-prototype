import express, { Request, Response, NextFunction } from "express";
import cors from 'cors'
import connectDB from "./config/mongodb";
import "dotenv/config"
import userRouter from "./routes/userRoute";
import connectCloudinary from "./config/cloudinary";
import jobRouter from "./routes/jobRoute";
import forumRouter from "./routes/forumRoute";
import postRoute from "./routes/postRoute";
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

app.get('/',(req:Request,res:Response)=>{
    res.send("API WORKING")
}) 
   
app.listen(port ,()=>console.log('Server started on PORT',port))
