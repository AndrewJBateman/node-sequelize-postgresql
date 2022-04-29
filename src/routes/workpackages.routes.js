import { Router } from "express";

import {
  getWorkpackages,
  createWorkpackage,
  updateWorkpackage,
  deleteWorkpackage,
  getWorkpackage,
} from "../controllers/workpackages.controller.js";

const router = Router();

router.get("/", getWorkpackages);
router.post("/", createWorkpackage);
router.put("/:id", updateWorkpackage);
router.delete("/:id", deleteWorkpackage);
router.get("/:id", getWorkpackage);

export default router;
