import express from "express";
import {
  addQuiz,
  deleteQuiz,
  getAllQuizes,
  getQuiz,
  updateQuiz,
} from "../controllers/quizControllers";

const router = express.Router();

router.get("/quizes", getAllQuizes);
router.get("/quiz/:id", getQuiz);
router.post("/quizes", addQuiz);
router.patch("/quizes/:id", updateQuiz);
router.delete("/quizes/:id", deleteQuiz);

export default router;
