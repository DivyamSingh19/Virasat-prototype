import express from "express"
 
import { 
  createPost, 
  getAllPosts, 
  getPostById, 
  updatePost, 
  deletePost 
} from "../controllers/postController.js";

const postRoute = express.Router();

postRoute.post("/", createPost);
postRoute.get("/", getAllPosts);
postRoute.get("/:id", getPostById);
postRoute.put("/:id", updatePost);
postRoute.delete("/:id", deletePost);

export default postRoute;
