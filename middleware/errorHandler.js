// import { constants } from "../constants.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const notFound = (req, res) => {
  const filePath = path.join(__dirname, "..", "views", "404.html");

  res.status(404).sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send("Even 404 file not working!, hehe");
    }
  });
};

export const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error("❌ ERROR:", err.message, "status code:", statusCode);

  const filePath = path.join(__dirname, "..", "views", "500.html");

  res.status(statusCode).sendFile(filePath, (fileErr) => {
    if (fileErr) {
      res.status(500).send("even 500 file not working!, hehe");
    }
  });
};
