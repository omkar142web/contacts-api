import { getCollection } from "../config/db.js";
import { ObjectId } from "mongodb";

export const getAllDevelopers = async (req, res, next) => {
  try {
    const collection = getCollection("contacts");
    const data = await collection.find().toArray();

    // res.json(data);
    return data;
  } catch (err) {
    // Passes the error to your fancy errorHandler file!
    next(err);
  }
};

// ! No need of this 🔺 btw.. see..🔻 🔻

// @desc Get all Contacts
// @route GET /api/contact
// @access public
const getContact = async (req, res) => {
  // res.status(200).json({ message: "Get all contacts!" });

  const collection = getCollection("contacts");
  const data = await collection.find().toArray();
  console.log(data);

  res.render("allContacts", { data: data });
};

// @desc Create a new Contact
// @route POST /api/contact
// @access public
// ! (201)
const createContact = async (req, res) => {
  const collection = getCollection("contacts");
  const addedData = await collection.insertOne(req.body);

  res.status(201).json({ addedData });

  // res.status(201).json({ message: "Create new contact!" });
};

// @desc Update a Contact
// @route PUT /api/contact/:id
// @access public
const updateContact = async (req, res) => {
  const id = req.params.id;

  const collection = getCollection("contacts");

  const updatedData = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: req.body },
  );

  res.status(200).json({ updatedData });

  // res.status(200).json({ message: `Update contact ${req.params.id}` });
};

//! @desc Delete a Contact
// @route DELETE /api/contact/:id
// @access public
const deleteContact = async (req, res) => {
  const id = req.params.id;

  const collection = getCollection("contacts");

  const deleteData = await collection.deleteOne({ _id: new ObjectId(id) });

  res.status(200).json({ deleteData });
};

// @desc Get a Contact
// @route GET /api/contact/:id
// @access public
const getOneContact = (req, res) => {
  res.status(200).json({ message: `Get contact for -${req.params.id}` });
};

export {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getOneContact,
  updateContactPage,
  addContactPage,
};

// @desc Get a Contact update page
// @route GET /api/contact/:id
// @access public
const updateContactPage = async (req, res) => {
  // res.send('updating..')

  const id = req.params.id;
  const collection = getCollection("contacts");
  const data = await collection.findOne({ _id: new ObjectId(id) });
  res.render("updateContact", {
    person: data,
    title: "Update Contact",
    buttonText: "Update Contact",
  });
};

// @desc Get a Contact ADD page
// @route GET /api/contact/:id
// @access public
const addContactPage = async (req, res) => {
  // res.send('updating..')

  const id = req.params.id;
  const collection = getCollection("contacts");
  const data = await collection.findOne({ _id: new ObjectId(id) });
  res.render("updateContact", {
    person: data,
    title: "Add Contact",
    buttonText: "Add Contact",
  });
};
