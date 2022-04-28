/*
  Warnings:

  - You are about to drop the `ReactionsOnMessages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersInChats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReactionsOnMessages" DROP CONSTRAINT "ReactionsOnMessages_messageId_fkey";

-- DropForeignKey
ALTER TABLE "ReactionsOnMessages" DROP CONSTRAINT "ReactionsOnMessages_reactionId_fkey";

-- DropForeignKey
ALTER TABLE "UsersInChats" DROP CONSTRAINT "UsersInChats_chatId_fkey";

-- DropForeignKey
ALTER TABLE "UsersInChats" DROP CONSTRAINT "UsersInChats_userId_fkey";

-- DropTable
DROP TABLE "ReactionsOnMessages";

-- DropTable
DROP TABLE "UsersInChats";

-- CreateTable
CREATE TABLE "_ChatToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MessageToReaction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChatToUser_AB_unique" ON "_ChatToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatToUser_B_index" ON "_ChatToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MessageToReaction_AB_unique" ON "_MessageToReaction"("A", "B");

-- CreateIndex
CREATE INDEX "_MessageToReaction_B_index" ON "_MessageToReaction"("B");

-- AddForeignKey
ALTER TABLE "_ChatToUser" ADD FOREIGN KEY ("A") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatToUser" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MessageToReaction" ADD FOREIGN KEY ("A") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MessageToReaction" ADD FOREIGN KEY ("B") REFERENCES "Reaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
