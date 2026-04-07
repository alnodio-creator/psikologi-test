import { prisma } from "./prisma";


export const getResult = async () => {
  try {
    const result = await prisma.testResult.findMany({
      orderBy: {
        CreatedAtt: "desc",
      },
    });
    return result;
  } catch (err) {
    console.error("ERROR GET RESULT:", err);
    throw new Error("Gagal mengambil data");
  }
};