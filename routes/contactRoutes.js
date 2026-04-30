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
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getOneContact,
  updateContactPage,
  addContactPage,
} from "../controllers/contactController.js";

// ! v1.0 🔻 🔻 🔻
// router.route("/").get(getContact);

// router.route("/:id").get(getOneContact);

// router.route("/").post(createContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);
// 🔺 🔺 🔺 🔺

// ! v1.1 🔻 🔻 🔻
router.route("/update/:id").get(updateContactPage);
router.route("/add").get(addContactPage);

// base route
router.route("/").get(getContact).post(createContact);

// route with ID
router
  .route("/:id")
  .get(getOneContact)
  .put(updateContact)
  .delete(deleteContact);

// 🔺 🔺 🔺 🔺

// ! exporting - router
export default router;
