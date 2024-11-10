import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/config/db.js";


const app = express();
dotenv.config();  

connectDb();

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "This route is not available." });
});

const PORT = process.env.PORT || 6001;
app.listen(PORT, () =>
  console.log(`Server Listening on port http://localhost:${PORT}`)
);
