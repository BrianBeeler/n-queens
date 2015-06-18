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
  var rookCount = 0


  var recurse(i) {
    if (i===n-1) { //if its reached the last row

      if(rookCount>3);



      return //end the current recursion
    }

    for (var j = 0; j < n; j++) { // for each column
      newBoard.togglePiece(i,j) //turn it on
      if (newBoard.hasAnyRooksConflicts()) { //if has conflicts
        newBoard.togglePiece(i,j) //turn it off
      }
      recursion(i+1)
      }

    }


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
