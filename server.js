import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3200;

import contactRoutes from "./routes/contactRoutes.js";

app.set("view engine", "ejs");
app.use(express.static("public"));

// // ! v0
// app.get("/api/contacts", (req, res) => {
//   res.status(200).json({ message: "Get all contacts!" });
// });

// // ! v1
app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} ✅`);
});
