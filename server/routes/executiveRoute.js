import express from "express";
import { getAllExecutiveMembers,getExecutiveById,addExecutiveMember,deleteExecutiveMemberById } from "../controllers/executiveController.js";

const router = express.Router();

//Route to get all executive members
router.get("/get", getAllExecutiveMembers);

//Route to get an executive member by ID
router.get("/get/:id", getExecutiveById);

//Route to add a new executive member
router.post("/create", addExecutiveMember);


//Route to delete an executive member by ID
router.delete("/delete/:id", deleteExecutiveMemberById);
//export the router module
export default router;

