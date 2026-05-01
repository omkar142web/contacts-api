import { getCollection } from "../config/db.js";
import { ObjectId } from "mongodb";

export const getAllDevelopers = async (req, res, next) => {
  try {
    const collection = getCollection("anyInformation");
    const data = await collection.find().toArray();

    // res.json(data);
    return data;
  } catch (err) {
    // Passes the error to your fancy errorHandler file!
    next(err);
  }
};

// ! No need of this 🔺 btw.. see..🔻 🔻

// @desc Get all anyInformation
// @route GET /api/contact
// @access public
const getInfo = async (req, res) => {
  // res.status(200).json({ message: "Get all anyInformation!" });

  const collection = getCollection("anyInformation");
  const data = await collection.find().sort({ _id: -1 }).toArray();
  console.log(data);

  res.render("allInfo", { data: data });
};

// @desc Create a new Contact
// @route POST /api/contact
// @access public
// ! (201)
const createInfo = async (req, res) => {
  const collection = getCollection("anyInformation");
  const addedData = await collection.insertOne(req.body);

  res.status(201).json({ addedData });

  // res.status(201).json({ message: "Create new contact!" });
};

// @desc Update a Contact
// @route PUT /api/contact/:id
// @access public
const updateInfo = async (req, res) => {
  const id = req.params.id;

  const collection = getCollection("anyInformation");

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
const deleteInfo = async (req, res) => {
  const id = req.params.id;

  const collection = getCollection("anyInformation");

  const deleteData = await collection.deleteOne({ _id: new ObjectId(id) });

  res.status(200).json({ deleteData });
};

// @desc Get a Contact
// @route GET /api/contact/:id
// @access public
const getOneInfo = (req, res) => {
  res.status(200).json({ message: `Get contact for -${req.params.id}` });
};

export {
  getInfo,
  createInfo,
  updateInfo,
  deleteInfo,
  getOneInfo,
  updateInfoPage,
  addInfoPage,
};

// @desc Get a Contact update page
// @route GET /api/contact/:id
// @access public
const updateInfoPage = async (req, res) => {
  // res.send('updating..')

  const id = req.params.id;
  const collection = getCollection("anyInformation");
  const data = await collection.findOne({ _id: new ObjectId(id) });
  console.log(data);
  res.render("updateInformation", {
    person: data,
    title: "Update Info",
    buttonText: "Update Info",
  });
};

// @desc Get a Contact ADD page
// @route GET /api/contact/:id
// @access public
const addInfoPage = async (req, res) => {
  // res.send('updating..')

  const id = req.params.id;
  const collection = getCollection("anyInformation");
  const data = await collection.findOne({ _id: new ObjectId(id) });
  res.render("updateInformation", {
    person: data,
    title: "Add Info",
    buttonText: "Add Info",
  });
};
