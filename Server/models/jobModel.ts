import mongoose, { Schema, Document } from "mongoose";

 
interface IJob extends Document {
  title: string;
  company: string;
  location?: string;
  jobType: "Full-time" | "Part-time" | "Internship" | "Freelance";
  description: string;
  requirements: string[];
  salary?: number;
  postedBy: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  isActive: boolean;
}

 
const jobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, default: "Remote" },
    jobType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Internship", "Freelance"],
    },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    salary: { type: Number },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

 
const jobModel = mongoose.model<IJob>("Job", jobSchema);

export default jobModel;
