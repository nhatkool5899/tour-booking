import express from "express";
import { deleteUser, getAllUser, getSingleUser, updatedUser } from "../controllers/userController.js";

const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


// update user
router.put('/:id', verifyUser, updatedUser) 

// delete user
router.delete('/:id', verifyUser, deleteUser) 

// getSingle user
router.get('/:id', verifyUser, getSingleUser) 

// getAll user
router.get('/', verifyAdmin, getAllUser) 



export default router;