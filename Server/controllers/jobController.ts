import { Request, Response } from "express";
import jobModel from "../models/jobModel";

 
export const createJob = async (req: Request, res: Response) => {
  try {
    const { title, company, location, jobType, description, requirements, salary, postedBy } = req.body;

    if (!title || !company || !jobType || !description || !requirements || !postedBy) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newJob = new jobModel({
      title,
      company,
      location,
      jobType,
      description,
      requirements,
      salary,
      postedBy,
    });

    await newJob.save();
    res.status(201).json({ success: true, message: "Job posted successfully", job: newJob });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await jobModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, jobs });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await jobModel.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, job });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const updateJob = async (req: Request, res: Response) => {
  try {
    const updatedJob = await jobModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, message: "Job updated successfully", job: updatedJob });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const deleteJob = async (req: Request, res: Response) => {
  try {
    const deletedJob = await jobModel.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, message: "Job deleted successfully" });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
