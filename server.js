import express from "express";
const app = express();

import { connectDB, getCollection } from "./config/db.js";

//! Initialize the connection
await connectDB("test"); // (Wait for DB connection to complete)

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //! req.body

import contactRoutes from "./routes/contactRoutes.js";
import { notFound, globalErrorHandler } from "./middleware/errorHandler.js";

app.set("view engine", "ejs");
app.use(express.static("public"));

// // ! v0
// app.get("/api/contacts", (req, res) => {
//   res.status(200).json({ message: "Get all contacts!" });
// });

// // ! v1
app.use("/api/contacts", contactRoutes);

app.use(notFound);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} ✅`);
});
