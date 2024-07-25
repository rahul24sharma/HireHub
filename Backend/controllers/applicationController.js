import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Application } from "../models/applicationSchema.js";
import cloudinary from "cloudinary";
import { Job } from "../models/jobSchema.js";
import upload from "../config/multerConfig.js"

cloudinary.config({
  cloud_name: "dz6xin3s8",
  api_key: "872996169568858",
  api_secret: "AvfVgw4y1ix43nIvDYoTq5Sy5xU",
});

export const employerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(
        new ErrorHandler(
          "Job Seekeres are not allowed to access this resource!",
          400
        )
      );
    }
    const { _id } = req.user;
    const applications = await Application.find({ "employerID.user": _id });
    res.status(200).json({
      success: true,
      applications,
    });
  }
);

export const jobSeekerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler(
          "Employer are not allowed to access this resource!",
          400
        )
      );
    }
    const { _id } = req.user;
    const applications = await Application.find({ "applicantID.user": _id });
    res.status(200).json({
      success: true,
      applications,
    });
  }
);

export const jobSeekerDeleteApplication = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler(
          "Employer are not allowed to access this resource!",
          400
        )
      );
    }
    const { id } = req.params;
    const application = await Application.findById(id);
    if (!application) {
      return next(new ErrorHandler("Oops! Application not found.", 400));
    }
    await application.deleteOne();
    res.status(200).json({
      success: true,
      message: "Application deleted successfully!",
    });
  }
);

// export const postApplication = catchAsyncError(async (req, res, next) => {
//   const { role } = req.user;
//   if (role === "Employer") {
//     return next(
//       new ErrorHandler(
//         "Employers are not allowed to access this resource!",
//         400
//       )
//     );
//   }
// //   console.log("Request Body:", req.body);
// //   console.log("Request Files:", req.files);
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return next(new ErrorHandler("Resume file required!"));
//   }
//   const { resume } = req.files;
//   const allowedFormats = [
//     "image/png",
//     "image/jpg",
//     "image/jpeg",
//     "image/webp",
//     "application/pdf",
//   ];
//   if (!allowedFormats.includes(resume.mimetype)) {
//     return next(
//       new ErrorHandler(
//         "Invalid file type. Please upload a PNG, JPG, JPEG, WEBP or PDF format!",
//         400
//       )
//     );
//   }
//   const cloudinaryResponse = await cloudinary.uploader.upload(
//     resume.tempFilePath
//   );
//   if (!cloudinaryResponse || cloudinaryResponse.error) {
//     console.error(
//       "Cloudinary Error",
//       cloudinaryResponse.error || "Unknown Cloudinary Error"
//     );
//     return next(new ErrorHandler("Failed to upload resume!", 400));
//   }
//   const { name, email, coverLetter, phone, address, jobId } = req.body;
//   const applicantID = {
//     user: req.user._id,
//     role: "Job Seeker",
//   };
//   if (!jobId) {
//     return next(new ErrorHandler("Job not found!", 404));
//   }
//   const jobDetails = await Job.findById(jobId);
//   if (!jobDetails) {
//     return next(new ErrorHandler("Job not found!", 404));
//   }
//   const employerID = {
//     user: jobDetails.postedBy,
//     role: "Employer",
//   };
//   if (!name || !email || !coverLetter || !phone || !address || !resume) {
//     return next(new ErrorHandler("Please fill all fields!", 400));
//   }
//   const application = await Application.create({
//     name,
//     email,
//     phone,
//     address,
//     coverLetter,
//     applicantID,
//     employerID,
//     resume: {
//       public_id: cloudinaryResponse.public_id,
//       url: cloudinaryResponse.secure_url,
//     },
//   });
//   res.status(200).json({
//     success: true,
//     message: "Application submitted successfully!",
//     application,
//   });
// });


export const postApplication = catchAsyncError(async (req, res, next) => {
  try {
    // Log the request URL
    console.log('Request URL:', req.originalUrl);
    
    // Log the request body and uploaded file
    console.log('Request body:', req.body);
    console.log('Uploaded file:', req.file);

    // Check user role
    const { role } = req.user;
    if (role === "Employer") {
      return next(new ErrorHandler("Employers are not allowed to access this resource!", 400));
    }

    // Ensure file upload
    if (!req.file) {
      return next(new ErrorHandler("Resume file is required!", 400));
    }

    // Extract fields from request body
    const { name, email, coverLetter, phone, address, jobId } = req.body;
    if (!name || !email || !coverLetter || !phone || !address || !jobId) {
      return next(new ErrorHandler("Please fill all fields!", 400));
    }

    // Check if job exists
    const jobDetails = await Job.findById(jobId);
    if (!jobDetails) {
      return next(new ErrorHandler("Job not found!", 404));
    }

    // Define applicant and employer IDs
    const applicantID = {
      user: req.user._id,
      role: "Job Seeker",
    };

    const employerID = {
      user: jobDetails.postedBy,
      role: "Employer",
    };

    // Save resume details
    const resume = {
      path: req.file.path,
      filename: req.file.filename,
    };

    // Create application
    const application = await Application.create({
      name,
      email,
      phone,
      address,
      coverLetter,
      applicantID,
      employerID,
      resume,
    });

    // Respond with success
    res.status(200).json({
      success: true,
      message: "Application submitted successfully!",
      application,
    });
  } catch (error) {
    console.error('Error in postApplication:', error);
    next(new ErrorHandler("An error occurred while submitting your application. Please try again.", 500));
  }
});

