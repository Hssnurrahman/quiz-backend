import { prisma } from "../utils/prismaClient";
import { errorHandler } from "../utils/errorHandler";

export const getAllOptions = async (req: any, res: any) => {
  try {
    const options = await prisma.option.findMany({});

    res.json({ data: options, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const getOption = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);

    const option = await prisma.option.findFirst({
      where: {
        id,
      },
    });

    res.json({ data: option, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const addOption = async (req: any, res: any) => {
  try {
    const { option, questionId } = req.body;

    const createdOption = await prisma.option.create({
      data: {
        option,
        questionId,
      },
    });

    res.json({ data: createdOption, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const updateOption = async (req: any, res: any) => {
  const id = parseInt(req.params.id);

  const { option, questionId } = req.body;

  try {
    const updatedOption = await prisma.option.update({
      where: {
        id,
      },
      data: {
        option,
        questionId,
      },
    });

    res.json({ data: updatedOption, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const deleteOption = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);

    const deletedOption = await prisma.option.delete({
      where: {
        id,
      },
    });

    res.json({ data: deletedOption, success: true, error: null });
  } catch (error) {
    errorHandler(error, res);
  }
};
