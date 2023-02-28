import express from "express";
import {
  addQuestion,
  deleteQuestion,
  getAllQuestions,
  getQuestion,
  updateQuestion,
} from "../controllers/questionControllers";

const router = express.Router();

router.get("/questions", getAllQuestions);
router.get("/question/:id", getQuestion);
router.post("/questions", addQuestion);
router.patch("/questions/:id", updateQuestion);
router.delete("/questions/:id", deleteQuestion);

export default router;
