function main(){
   moveUpDiagonally();
   moveUpDiagonally();
   moveUpDiagonally();
   moveUpDiagonally();
   putBeeper();
   moveDown();
   putBeeper();
   moveDownDiagonally();
   moveDownDiagonally();
   turnLeft();
   move();
   move();
   putBeeper();
   escapeTheBottomRightCorner();
   topLeftCorner();
}
function moveUpDiagonally(){
   putBeeper();
   move();
   turnLeft();
   move();
   turnLeft();
   turnLeft();
   turnLeft();
}
function moveDown(){
   turnLeft();
   turnLeft();
   turnLeft();
   move();
   move();
}
function moveDownDiagonally(){
   move();
   turnLeft();
   turnLeft();
   turnLeft();
   move();
   putBeeper();
   turnLeft();
}
function escapeTheBottomRightCorner(){
   turnLeft();
   move();
   move();
   move();
   move();
   turnLeft();
   move();
   move();
   turnLeft();
   putBeeper();
   moveDownDiagonally();
   moveDownDiagonally();
}
function topLeftCorner(){
   turnLeft();
   turnLeft();
   move();
   move();
   putBeeper();
}
