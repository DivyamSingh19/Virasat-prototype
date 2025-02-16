 
import PostModel from "../models/postModel";

 
export const createPost = async (req , res ) => {
  try {
    const { title, content, author, tags } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newPost = new PostModel({ title, content, author, tags });
    await newPost.save();

    res.status(201).json({ success: true, message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const getAllPosts = async (req , res ) => {
  try {
    const posts = await PostModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const getPostById = async (req , res ) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.status(200).json({ success: true, post });
  } catch (error ) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const updatePost = async (req , res ) => {
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.status(200).json({ success: true, message: "Post updated successfully", post: updatedPost });
  } catch (error ) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const deletePost = async (req , res ) => {
  try {
    const deletedPost = await PostModel.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.status(200).json({ success: true, message: "Post deleted successfully" });
  } catch (error ) {
    res.status(500).json({ success: false, message: error.message });
  }
};
