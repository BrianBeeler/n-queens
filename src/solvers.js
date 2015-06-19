/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var newBoard = new Board({"n":n})
  var solution;

  for (var i = 0; i < n; i++){
    for (var j = 0; j < n; j++) {
      newBoard.togglePiece(i,j)
      if (newBoard.hasAnyRooksConflicts()) {
        newBoard.togglePiece(i, j)
      }

    }

  }
  solution = newBoard.rows()

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var newBoard = new Board({"n":n})
  var solutionCount = 0;
  var j = 0;
  var recursion = function(i, j) {
    if (i===n-1) {
      newBoard.togglePiece(i,j);
      if (newBoard.hasAnyRooksConflicts()) {
        newBoard.togglePiece(i,j); // Keep i, change  j;
        return;
      }
      else{ //works!
        solutionCount++
        newBoard.togglePiece(i,j)
        return
      }
    }
    newBoard.togglePiece(i,j)
    for (var j = 0; j < n; j++) { // for each column
      recursion(i+1, j)
    }  //turn it off
    //newBoard.togglePiece(i,j)
    newBoard.clearRow(i)
  }
  for (var j = 0; j < n; j++) {
    recursion(0,j)
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var newBoard = new Board({"n":n})

  if (n === 0) {
    return []
  }
  var solutionCount = 0;
  var j = 0;
  var solution;
  var recursion = function(i, j, solution) {
    if (i===n-1) {
      newBoard.togglePiece(i,j);
      if (newBoard.hasAnyQueensConflicts()) {
        newBoard.togglePiece(i,j); // Keep i, change  j;
        return;
      }

      else{ //works!
        solutionCount++
        window.solution = newBoard.rows().slice()
        newBoard.togglePiece(i,j)
        return
      }
    }
    if (i < n) {
      newBoard.togglePiece(i,j);
    }
    for (var j = 0; j < n; j++) { // for each column
      recursion(i+1, j)
    }  //turn it off
    //j=0;
    newBoard.clearRow(i)
  }
  for (var j = 0; j < n; j++) {
    recursion(0,j)
    if (solutionCount >= 1) {
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
      return window.solution
    }
  }

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var newBoard = new Board({"n":n})
  if (n === 0) {
    return 1
  }
  var solutionCount = 0;
  var j = 0;
  var recursion = function(i, j) {
    if (i===n-1) {
      newBoard.togglePiece(i,j);
      if (newBoard.hasAnyQueensConflicts()) {
        newBoard.togglePiece(i,j); // Keep i, change  j;
        return;
      }

      else{ //works!
        solutionCount++
        newBoard.togglePiece(i,j)
        return
      }
    }
    newBoard.togglePiece(i,j)
    for (var j = 0; j < n; j++) { // for each column
      recursion(i+1, j)
    }  //turn it off
    //j=0;
    newBoard.clearRow(i)
  }
  for (var j = 0; j < n; j++) {
    recursion(0,j)
  }
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
