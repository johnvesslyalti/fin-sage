/*
  Warnings:

  - Changed the type of `category` on the `Expense` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FOOD', 'TRAVEL', 'UTILITIES', 'OTHERS');

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;
