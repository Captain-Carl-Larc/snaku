import express from "express";
import { getAllExecutiveMembers } from "../controllers/executiveController";

const router = express.Router();

//Route to get all executive members

router.get("/get/executives", getAllExecutiveMembers);

export default router;

// /server/routes/executiveRoute.js