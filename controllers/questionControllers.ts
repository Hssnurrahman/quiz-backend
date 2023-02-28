import { prisma } from "../utils/prismaClient";
import { errorHandler } from "../utils/errorHandler";

export const getAllQuestions = async (req: any, res: any) => {
  try {
    const questions = await prisma.question.findMany({
      include: {
        options: true,
      },
    });

    res.json({ data: questions, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const getQuestion = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);

    const question = await prisma.question.findFirst({
      where: {
        id,
      },
      include: {
        options: true,
      },
    });

    res.json({ data: question, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const addQuestion = async (req: any, res: any) => {
  try {
    const { title, isMandatory, reply, rightAnswer, options, quizId } =
      req.body;

    const createdQuestion = await prisma.question.create({
      data: {
        title,
        isMandatory,
        reply,
        rightAnswer,
        options: {
          create: options,
        },
        quizId,
      },
      include: {
        options: true,
      },
    });

    res.json({ data: createdQuestion, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const updateQuestion = async (req: any, res: any) => {
  const id = parseInt(req.params.id);

  const { title, isMandatory, reply, rightAnswer, options } = req.body;

  try {
    const updatedQuestion = await prisma.question.update({
      where: {
        id,
      },
      data: {
        title,
        isMandatory,
        reply,
        rightAnswer,
        options,
      },
    });

    res.json({ data: updatedQuestion, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const deleteQuestion = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);

    const deletedQuestion = await prisma.question.delete({
      where: {
        id,
      },
      include: {
        options: true,
      },
    });

    res.json({ data: deletedQuestion, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};
