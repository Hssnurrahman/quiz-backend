import { PrismaClient, Prisma } from "@prisma/client";

export const errorHandler = async (error: any, res: any) => {
  if (error instanceof Prisma.PrismaClientInitializationError) {
    res.json({
      data: null,
      success: false,
      error: {
        name: error.name,
        message: error.message,
        code: error.errorCode,
        stack: error.stack,
      },
    });
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    res.json({
      data: null,
      success: false,
      error: {
        name: error.name,
        message: error.message,
        code: error.code,
        stack: error.stack,
      },
    });
  } else if (error instanceof Prisma.PrismaClientRustPanicError) {
    res.json({
      data: null,
      success: false,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
    });
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    res.json({
      data: null,
      success: false,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
    });
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    res.json({
      data: null,
      success: false,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
    });
  }
};
