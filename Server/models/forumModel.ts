import mongoose, { Schema, Document } from "mongoose";

interface IComment {
  author: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
}

interface IForumPost extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  upvotes: mongoose.Types.ObjectId[];
  downvotes: mongoose.Types.ObjectId[];
  comments: IComment[];
  tags?: string[];
  createdAt: Date;
}

const ForumSchema = new Schema<IForumPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    tags: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const ForumModel = mongoose.model<IForumPost>("Forum", ForumSchema);
export default ForumModel;
