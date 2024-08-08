import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/authRoutes.js"
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //parse req.body
app.use(express.urlencoded({ extended: true })); //to parse form data(url encoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
  connectMongoDB();
});