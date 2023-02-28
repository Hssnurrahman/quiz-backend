import { prisma } from "../utils/prismaClient";
import { errorHandler } from "../utils/errorHandler";

export const getAllQuizes = async (req: any, res: any) => {
  try {
    const quizes = await prisma.quiz.findMany({
      include: {
        questions: true,
      },
    });

    res.json({ data: quizes, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const getQuiz = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);

    const quiz = await prisma.quiz.findFirst({
      where: {
        id,
      },
      include: {
        questions: true,
      },
    });

    if (!quiz) {
      throw new Error(`No quiz found with ${id}`);
    }

    res.json({ data: quiz, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const addQuiz = async (req: any, res: any) => {
  try {
    const { title, description, questions } = req.body;

    const createdQuiz = await prisma.quiz.create({
      data: {
        title: title,
        description: description,
        questions: {
          create: questions,
        },
      },
      include: {
        questions: true,
      },
    });

    res.json({ data: createdQuiz, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const updateQuiz = async (req: any, res: any) => {
  const id = parseInt(req.params.id);

  const { title, description, questions } = req.body;

  try {
    const updatedQuiz = await prisma.quiz.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        questions,
      },
    });

    res.json({ data: updatedQuiz, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const deleteQuiz = async (req: any, res: any) => {
  const id = parseInt(req.params.id);

  try {
    const deletedQuiz = await prisma.quiz.delete({
      where: {
        id,
      },
      include: {
        questions: true,
      },
    });

    res.json({ data: deletedQuiz, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};
