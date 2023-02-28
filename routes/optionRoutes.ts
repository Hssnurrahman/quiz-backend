import express from "express";
import {
  addOption,
  deleteOption,
  getAllOptions,
  getOption,
  updateOption,
} from "../controllers/optionController";

const router = express.Router();

router.get("/options", getAllOptions);
router.get("/option/:id", getOption);
router.post("/options", addOption);
router.patch("/options/:id", updateOption);
router.delete("/options/:id", deleteOption);

export default router;
