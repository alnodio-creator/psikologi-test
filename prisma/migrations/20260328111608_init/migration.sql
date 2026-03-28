-- CreateTable
CREATE TABLE "TestResult" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Age" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "Marriage" TEXT NOT NULL,
    "Job" TEXT NOT NULL,
    "Scores" JSONB NOT NULL,
    "CreatedAtt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TestResult_pkey" PRIMARY KEY ("id")
);
