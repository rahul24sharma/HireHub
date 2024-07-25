import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import jobRouter from "./routes/jobRouter.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(cookieParser());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Directly specify the frontend URL for local development
const FRONTEND_URL = "http://localhost:5173";

app.use(
  cors({
    origin: [FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use('/uploads', express.static(join(__dirname, 'uploads')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use("/api/v1/user", userRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/job", jobRouter);

dbConnection();

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

export default app;
