import userModel from "../models/userModel";
import validator from "validator"
import bycrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
import { Request,Response } from "express";

const createToken = (id) =>{
    return JWT.sign({id},process.env.JWT_SECRET)
}

const loginUser = async(req:Request,res:Response)=>{
      try {
        
      } catch (error) {
        
      }

}