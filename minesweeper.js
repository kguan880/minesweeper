document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
  var board = {cells:[ 
    {row: 1, col: 1, isMine: true, hidden: true}, 
    {row: 2, col: 1, isMine: false, hidden: true}, 
    {row: 3, col: 1, isMine: false, hidden: true},
    {row: 1, col: 2, isMine: false, hidden: true},
    {row: 2, col: 2, isMine: true, hidden: true},
    {row: 3, col: 2, isMine: false, hidden: true},
    {row: 1, col: 3, isMine: false, hidden: true},
    {row: 2, col: 3, isMine: true, hidden: true},
    {row: 3, col: 3, isMine: false, hidden: true}
  ]}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i ++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  lib.initBoard()
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
    for (i in board.cells) {
      if (board.cells[i].isMine === true && board.cells[i].isMarked != true) {
        return
      } else if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
        return
      }
    }
    lib.displayMessage('You win!')
  }

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surround = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0
  for (var i = 0; i < surround.length; i++){
    if (surround[i].isMine == true){
      count ++
    }
  }
  return count
}

