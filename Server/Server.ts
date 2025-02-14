import express, { Request, Response, NextFunction } from "express";
import cors from 'cors'

const app = express();

app.use(cors())