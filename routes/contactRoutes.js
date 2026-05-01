import express from "express";
const router = express.Router();

// ! v0 🔻 🔻 🔻
// router.route("/").get( (req, res) => {
//   res.status(200).json({ message: "Get all contacts!" });
// });

// router.route("/:id").get( (req, res) => {
//   res.status(200).json({ message: `Get contact for ${req.params.id}` });
// });

// router.route("/").post( (req, res) => {
//   res.status(200).json({ message: "Create new contact!" });
// });

// router.route("/:id").put( (req, res) => {
//   res.status(200).json({ message: "Update contact" });
// });

// router.route("/:id").delete( (req, res) => {
//   res.status(200).json({ message: "Delete contact" });
// });
// ! v0 🔺 🔺 🔺

// ! v1 🔻 🔻 🔻
import {
  getInfo,
  createInfo,
  updateInfo,
  deleteInfo,
  getOneInfo,
  updateInfoPage,
  addInfoPage,
} from "../controllers/contactController.js";

// ! v1.0 🔻 🔻 🔻
// router.route("/").get(getContact);

// router.route("/:id").get(getOneContact);

// router.route("/").post(createContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);
// 🔺 🔺 🔺 🔺

// ! v1.1 🔻 🔻 🔻
router.route("/update/:id").get(updateInfoPage);
router.route("/add").get(addInfoPage);

// base route
router.route("/").get(getInfo).post(createInfo);

// route with ID
router.route("/:id").get(getOneInfo).put(updateInfo).delete(deleteInfo);

// 🔺 🔺 🔺 🔺

// ! exporting - router
export default router;
