import express from "express";
import { 
  createForumPost, 
  getAllForumPosts, 
  getForumPostById, 
  updateForumPost, 
  deleteForumPost 
} from "../controllers/forumController.js"

const forumRouter = express.Router();
 
forumRouter.post("/", createForumPost);

 
forumRouter.get("/", getAllForumPosts);

 
forumRouter.get("/:id", getForumPostById);

 
forumRouter.put("/:id", updateForumPost);

 
forumRouter.delete("/:id", deleteForumPost);

export default forumRouter;
