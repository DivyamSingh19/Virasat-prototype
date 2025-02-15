import express, { Router } from "express";
import { Request, Response } from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController";

const userRouter: Router = express.Router();

userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    await registerUser(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

userRouter.post("/login", async (req: Request, res: Response) => {
  try {
    await loginUser(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

userRouter.post("/admin", async (req: Request, res: Response) => {
  try {
    await adminLogin(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default userRouter;
