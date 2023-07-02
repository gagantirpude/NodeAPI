import express from "express";
import { userModel } from "../models/userMode.js";
import {
  deleteUser,
  getAllUser,
  getTestSpecial,
  getUserByDynamic,
  getUserById,
  postNewUser,
  updateUser,
} from "../controllers/userControllers.js";

//Router Splitting
const router = express.Router(); //now we can use all method with router

router.get("/all", getAllUser);

router.post("/new", postNewUser);

//userId Static
router.get("/userid", getUserById);

router.get("/userid/special", getTestSpecial);

//user Dynamic url
//note :- Dynamic Route always last me rakhana hai.
// router.get("/userid/:id", getUserByDynamic);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

//or if our route are same
router
  .route("/userid/:id")
  .get(getUserByDynamic)
  .put(updateUser)
  .delete(deleteUser);

export default router;
