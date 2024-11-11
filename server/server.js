import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/config/db.js";
import postRouter from "./src/routes/postRoutes.js";
import errorHandler from "./src/middlewares/errorHandler.js"


const app = express();
dotenv.config();  

connectDb();

app.use(cors());
app.use(express.json());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


app.use("/api/posts", postRouter);
app.use("*", (req, res) => {res.status(404).json({ success: false, message: "This route is not available." })});
app.use(errorHandler);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server Listening on port http://localhost:${PORT}`)
);
