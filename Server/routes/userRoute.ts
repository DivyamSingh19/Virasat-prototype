import express from 'express'
import { Router,Request,Response } from 'express'
import { loginUser,registerUser,adminLogin } from '../controllers/userController'


const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;
