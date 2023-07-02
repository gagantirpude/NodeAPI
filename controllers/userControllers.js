import { userModel } from "../models/userMode.js";

const getAllUser = async (req, res) => {
  const users = await userModel.find({});
  res.json({
    success: true,
    users: users,
  });
};

//Static user
const getUserById = async (req, res) => {
  const { id } = req.query; //i static data we requested to query
  const user = await userModel.findById(id);
  console.log(user);
  res.json({
    success: true,
    user,
  });
};

const postNewUser = async (req, res) => {
  // const { username, email, password } = req.body;
  const { username, email, password } = req.query;
  const user = await userModel.create({
    username,
    email,
    password,
  });
  console.log(user);

  res
    .status(201)
    //status code 201 stand for create user data
    .cookie("token", null, {
      //cookie create
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 60 * 1000),
    })
    .json({
      //json value
      success: true,
      massage: "Data Save on Database",
    });
};

const getUserByDynamic = async (req, res) => {
  const { id } = req.params; //i dynamic we requested to params
  const user = await userModel.findById(id);

  //   console.log("Dynamic :>> ", user);

  res.json({
    success: true,
    user,
  });
};

const getTestSpecial = (req, res) => {
  // const user = req.query;
  // console.log("from params ", user);
  res.json({
    success: true,
    massage: "Special Testing Route",
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);

  res.json({
    success: true,
    massage: "Update User",
  });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);

  res.json({
    success: true,
    massage: "Deleted User",
  });
};

export {
  getUserById,
  getAllUser,
  postNewUser,
  getUserByDynamic,
  getTestSpecial,
  updateUser,
  deleteUser,
};
