import userModel from "../models/userModel";
import validator from "validator"
import bycrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
import { Request,Response } from "express";

const createToken = (id:string) =>{
    return JWT.sign({id},(process.env.JWT_SECRET)as string) 
}

const loginUser = async(req:Request,res:Response)=>{
      try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User doesn't exist"})
        }
        const isMatch = await bycrypt.compare(password,user.password);
        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:'Invalid Credentials'})
        }
        
      } catch (error) {
        console.log(error);
      
        if (error instanceof Error) {
          res.json({ success: false, message: error.message });
        } else {
          res.json({ success: false, message: "An unknown error occurred" });
        }
      }

}

const registerUser = async (req:Request,res:Response)=>{
    try {
        const {name,email,password}= req.body;
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong Password"})
        }
        const salt = await bycrypt.genSalt(10)

        const hashedPassword = await bycrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
      
        if (error instanceof Error) {
          res.json({ success: false, message: error.message });
        } else {
          res.json({ success: false, message: "An unknown error occurred" });
        }
      }
}

const adminLogin = async (req:Request,res:Response)=>{
    try {
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = JWT.sign(email+password,(process.env.JWT_SECRET)as string)
            res.json({
                success:true,
                token
            })
        }else{
            res.json({
                success:false,
                message:"Invalid Credentials"
            })
        }

    } catch (error) {
        console.log(error);
      
        if (error instanceof Error) {
          res.json({ success: false, message: error.message });
        } else {
          res.json({ success: false, message: "An unknown error occurred" });
        }
      }
}

export {loginUser,registerUser,adminLogin}