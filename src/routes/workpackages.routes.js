import { Router } from "express";

import {
  getWorkpackages,
  createWorkpackage,
  updateWorkpackage,
  deleteWorkpackage,
  getWorkpackage,
} from "../controllers/workpackages.controller.js";

const router = Router();

router.get("/workpackages", getWorkpackages);
router.post("/workpackages", createWorkpackage);
router.put("/workpackages/:id", updateWorkpackage);
router.delete("/workpackages/:id", deleteWorkpackage);
router.get("/workpackages/:id", getWorkpackage);

export default router;
